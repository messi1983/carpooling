import { Component, OnInit } from "@angular/core";
import { MatStepper, MatDialog } from "@angular/material";

import { CarpoolerUserSelectionComponent } from "../../components/carpooler-user-selection/carpooler-user-selection.component";

import { AbstractStepperComponent } from "app/components/abstract.stepper.component";

@Component({
  selector: "carpooling-create",
  templateUrl: "./carpooling-create.component.html",
  styleUrls: ["./carpooling-create.component.css"]
})
export class CarpoolingCreateComponent extends AbstractStepperComponent {
  list: any[] = [
    {
      selected: false,
      name: "Photos",
      age: 30,
      note: 1,
      groupe: "Semba"
    },
    {
      selected: false,
      name: "Recipes",
      age: 35,
      note: 2,
      groupe: "Salsa"
    },
    {
      selected: false,
      name: "Work",
      age: 20,
      note: 5,
      groupe: "Salsa"
    },
    {
      selected: false,
      name: "Louis",
      age: 15,
      note: 3,
      groupe: "Kizomba"
    },
    {
      selected: false,
      name: "Mister",
      age: 24,
      note: 5,
      groupe: "Bachata"
    },
    {
      selected: false,
      name: "Jackson",
      age: 15,
      note: 3,
      groupe: "Swing"
    },
    {
      selected: false,
      name: "Tchelo",
      age: 24,
      note: 5,
      groupe: "Oriengo"
    },
    {
      selected: false,
      name: "Yann",
      age: 15,
      note: 3,
      groupe: "Swing"
    }
  ];

  constructor(private _dialog: MatDialog) {
    super();
  }

  ngOnInit() {}

  openPreselectionDialog(): void {
    const dialogRef = this._dialog.open(CarpoolerUserSelectionComponent, {
      width: "750px",
      data: { idDriver: "idDriver", filters: {} }
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log(response);
    });
  }
}
