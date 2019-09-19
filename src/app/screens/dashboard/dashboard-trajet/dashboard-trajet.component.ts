import { Component, OnInit } from "@angular/core";

import { Carpooling } from "app/model/carpooling";
import { Reservation } from "app/model/reservation";
import { Proposition } from "app/model/proposition";

import { CarpoolingViewModel } from "app/modelview/carpooling.view.model";

import { CarpoolingService } from "app/service/carpooling.service";
import { ReservationService } from "app/service/reservation.service";
import { PropositionService } from "app/service/proposition.service";

@Component({
  selector: "dashboard-trajet",
  templateUrl: "./dashboard-trajet.component.html",
  styleUrls: ["../dashboard.component.css", "./dashboard-trajet.component.css"],
  providers: [CarpoolingService, ReservationService, PropositionService]
})
export class DashboardTrajetComponent implements OnInit {
  nextTrips: Carpooling[] = [];
  reservations: Reservation[] = [];
  propositions: Proposition[] = [];
  tabSet: any[];

  constructor(
    private _reservationService: ReservationService,
    private _propositionService: PropositionService,
    private _carpoolingService: CarpoolingService
  ) {}

  ngOnInit() {
    this._reservationService
      .findUserReservations("di1", "E")
      .subscribe(resultList => {
        this.reservations.push.apply(this.reservations, resultList);
      });

    this._propositionService
      .findUserPropositions("di1", "E")
      .subscribe(resultList => {
        this.reservations.push.apply(this.propositions, resultList);
      });

    this._carpoolingService
      .findUserNextTrips("1", "A")
      .subscribe(resultList => {
        this.nextTrips.push.apply(this.nextTrips, resultList);
      });
  }

  newCarpoolingViewModel(carpooling: Carpooling): CarpoolingViewModel {
    return new CarpoolingViewModel(carpooling);
  }
}
