import { Component, Input } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";

import { rotation } from "app/animation/rotation.animation";

import { CarpoolingEvent } from "app/event/carpooling.event";

import { AbstractRotateComponent } from "app/components/abstract.rotate.component";

import { CarpoolingService } from "app/service/carpooling.service";

@Component({
  selector: "carpooling-card",
  templateUrl: "./carpooling-card.component.html",
  styleUrls: ["./carpooling-card.component.css"],
  animations: [rotation]
})
export class CarpoolingCardComponent extends AbstractRotateComponent {
  @Input() quotaReached: boolean;

  constructor(carpoolingService: CarpoolingService) {
    super(carpoolingService);
  }

  onSelect(event: MatCheckboxChange): void {
    this.click.emit(
      new CarpoolingEvent(this.current, this.isAller, "selection")
    );
  }

  onDetail(): void {
    this.click.emit(new CarpoolingEvent(this.current, this.isAller, "detail"));
  }

  onMapRoute(): void {
    this.click.emit(
      new CarpoolingEvent(this.current, this.isAller, "mapRoute")
    );
  }
}
