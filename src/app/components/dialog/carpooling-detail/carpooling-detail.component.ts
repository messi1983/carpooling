import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { rotation } from "../../../animation/rotation.animation";
import { MatCheckboxChange } from "@angular/material/checkbox";

import { AbstractRotateComponent } from "app/components/abstract.rotate.component";

import { Carpooling } from "app/model/carpooling";

import { CarpoolingService } from "app/service/carpooling.service";

export interface Section {
  name: string;
  groupe: string;
}

@Component({
  selector: "app-detail-dialog",
  templateUrl: "./carpooling-detail.component.html",
  styleUrls: ["./carpooling-detail.component.css"],
  animations: [rotation]
})
export class CarpoolingDetailComponent extends AbstractRotateComponent {
  flip: string = "inactive";
  folders: Section[] = [
    {
      name: "Photos",
      groupe: "Semba"
    },
    {
      name: "Recipes",
      groupe: "Salsa"
    },
    {
      name: "Work",
      groupe: "Salsa"
    },
    {
      name: "Louis",
      groupe: "Kizomba"
    },
    {
      name: "Messi",
      groupe: "Kizomba"
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Carpooling,
    carpoolingService: CarpoolingService
  ) {
    super(carpoolingService);
  }

  onNotifySelection(event: MatCheckboxChange): void {
    // this.current.checked = event.checked;
  }

  protected getCarpooling(): Carpooling {
    return this.data;
  }
}
