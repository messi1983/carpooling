import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";

import { ConfirmationComponent } from "app/components/dialog/confirmation/confirmation.component";
import { CreateVehiculeComponent } from "./dialog/create-vehicule/create-vehicule.component";

import { Car } from "../model/car";

@Component({
  selector: "dashboard-vehicle",
  templateUrl: "./dashboard-vehicle.component.html",
  styleUrls: ["../dashboard.component.css", "./dashboard-vehicle.component.css"]
})
export class DashboardVehicleComponent {
  userCars: Car[] = [
    new Car(
      "Clio 2",
      "Renault",
      new Date("1/1/2004"),
      "AU - 345 - DF",
      3,
      true,
      "Noir"
    ),
    new Car(
      "Megane coupe 3",
      "Renault",
      new Date("1/1/2004"),
      "AS - 317 - PZ",
      3,
      false,
      "Noir"
    ),
    new Car(
      "Range Rover",
      "Land Rover",
      new Date("1/1/2004"),
      "PX - 523 - OK",
      3,
      false,
      "Noir"
    )
  ];

  constructor(public _dialog: MatDialog) {}

  ngOnInit() {}

  delete(idx: number): void {
    const dialogRef = this._dialog.open(ConfirmationComponent, {
      width: "600px",
      data: { message: "Souhaitez vous réellement supprimer ce véhicule ?" }
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        // TODO : delete new car in the database
        this.userCars.splice(idx, 1);
      }
    });
  }

  add(): void {
    const dialogRef = this._dialog.open(CreateVehiculeComponent, {
      width: "600px"
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        // TODO : register new car in the database
        this.userCars.push(response);
      }
    });
  }

  update(idx: number): void {
    const dialogRef = this._dialog.open(CreateVehiculeComponent, {
      width: "600px",
      data: this.userCars[idx]
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        // TODO : update selected car in the database
        Object.assign(this.userCars[idx], response);
      }
    });
  }
}
