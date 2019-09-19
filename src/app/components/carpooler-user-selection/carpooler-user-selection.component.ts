import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

import { CarpoolerViewModel } from "app/modelview/carpooler.view.model";

@Component({
  selector: "app-carpooler-user-selection",
  templateUrl: "./carpooler-user-selection.component.html",
  styleUrls: ["./carpooler-user-selection.component.css"]
})
export class CarpoolerUserSelectionComponent {
  driverCreatedGroupes = ["Salsa", "Bachata", "Kizomba"];
  dateTime = new Date();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  getSelection(): CarpoolerViewModel[] {
    let selection: CarpoolerViewModel[] = [];
    for (let carpooler of this.data.carpoolers) {
      if (carpooler.selected) {
        selection.push(carpooler);
      }
    }
    return selection;
  }
}
