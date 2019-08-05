import { OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Carpooling } from "app/model/carpooling";

import { CarpoolingViewModel } from "app/modelview/carpooling.view.model";

import { CarpoolingEvent } from "app/event/carpooling.event";

import { CarpoolingService } from "app/service/carpooling.service";

export abstract class AbstractRotateComponent implements OnInit {
  @Input() isAller: boolean = true;
  @Input() aller: CarpoolingViewModel;
  @Input() retour: CarpoolingViewModel;

  @Output() click = new EventEmitter<CarpoolingEvent>();

  protected current: CarpoolingViewModel;

  flip: string = "inactive";

  mapCps: Map<string, number> = new Map<string, number>();

  constructor(private _carpoolingService: CarpoolingService) {}

  ngOnInit() {
    this.current = this.getCurrent();

    this.mapCps.set("18/12/2017-10h00", 1);
    this.mapCps.set("18/12/2017-12h30", 3);
    this.mapCps.set("18/12/2017-13h30", 7);
    this.mapCps.set("20/12/2017-10h40", 8);
    this.mapCps.set("20/12/2017-12h30", 10);
    this.mapCps.set("20/12/2017-13h30", 13);
  }

  toggleFlip() {
    const dateTime = this.isAller
      ? this.current.dateTimeRetour
      : this.current.dateTimeAller;

    this.voirSensInverse(this.mapCps.get(dateTime), this.isAller);
  }

  getCurrent(): CarpoolingViewModel {
    return this.isAller ? this.aller : this.retour;
  }

  protected voirSensInverse(id, isAller): void {
    this._carpoolingService
      .findCarpooling(id, isAller)
      .subscribe(carpooling => {
        const cpVm = new CarpoolingViewModel(carpooling);
        if (isAller) {
          this.retour = cpVm;
        } else {
          this.aller = cpVm;
        }

        this.flip = this.flip == "inactive" ? "active" : "inactive";
        this.isAller = !this.isAller;
        this.current = this.getCurrent();

        this.click.emit(new CarpoolingEvent(cpVm, !isAller, "recuperation"));
      });
  }
}
