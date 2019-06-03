import { Component, OnInit } from "@angular/core";

import { Car } from "../../../model/dashboard.model";

@Component({
  selector: "app-create-vehicule",
  templateUrl: "./create-vehicule.component.html",
  styleUrls: ["./create-vehicule.component.css"]
})
export class CreateVehiculeComponent implements OnInit {
  newCar: Car = {
    modele: "",
    marque: "",
    annee: null,
    matricule: "",
    nbPlacesDispo: 3,
    color: "",
    isVehPrincipal: false
  };

  constructor() {}

  ngOnInit() {}
}
