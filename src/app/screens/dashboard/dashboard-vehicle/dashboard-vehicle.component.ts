import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";

import { CreateVehiculeComponent } from "./dialog/create-vehicule/create-vehicule.component";

import { Car } from "../model/dashboard.model";

@Component({
  selector: "dashboard-vehicle",
  templateUrl: "./dashboard-vehicle.component.html",
  styleUrls: ["../dashboard.component.css", "./dashboard-vehicle.component.css"]
})
export class DashboardVehicleComponent {
  userCars: Car[] = [
    {
      modele: "Clio 2",
      marque: "Renault",
      annee: new Date("1/1/2004"),
      matricule: "AU - 345 - DF",
      nbPlacesDispo: 3,
      isVehPrincipal: true,
      color: "Noir"
    },
    {
      modele: "Megane coupe 3",
      marque: "Renault",
      annee: new Date("1/1/2004"),
      matricule: "AS - 317 - PZ",
      nbPlacesDispo: 3,
      isVehPrincipal: false,
      color: "Noir"
    },
    {
      modele: "Range Rover",
      marque: "Land Rover",
      annee: new Date("1/1/2004"),
      matricule: "PX - 523 - OK",
      nbPlacesDispo: 3,
      isVehPrincipal: false,
      color: "Noir"
    }
  ];

  constructor(public _dialog: MatDialog) {}

  ngOnInit() {}

  delete(idx: number): void {
    this.userCars.splice(idx, 1);
  }

  add(): void {
    const dialogRef = this._dialog.open(CreateVehiculeComponent, {
      width: "600px"
    });
    this.treatDialogReturn(dialogRef);
  }

  private treatDialogReturn(dialogRef: any): void {
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.userCars.push(this.createNewCar());
      }
    });
  }

  /**
   * To delete
   */
  private createNewCar(): Car {
    return {
      modele: "Elegance",
      marque: "Renault",
      annee: new Date("1/1/2004"),
      matricule: "AU - 345 - DF",
      nbPlacesDispo: 3,
      color: "Noir",
      isVehPrincipal: true
    };
  }
}
