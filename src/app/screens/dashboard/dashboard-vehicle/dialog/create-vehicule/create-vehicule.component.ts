import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Car } from "../../../model/car";

@Component({
  selector: "app-create-vehicule",
  templateUrl: "./create-vehicule.component.html",
  styleUrls: ["./create-vehicule.component.css"]
})
export class CreateVehiculeComponent implements OnInit {
  newCar: Car = new Car("", "", null, "", 3, false, "");

  constructor(
    public dialogRef: MatDialogRef<CreateVehiculeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      Object.assign(this.newCar, data);
    }
  }

  ngOnInit() {}

  onSubmit(): void {
    //this.dialogRef.close(this.newCar);
  }
}
