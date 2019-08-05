import { Component, OnInit } from "@angular/core";

import { Carpooling } from "app/model/carpooling";
import { Reservation } from "app/model/reservation";

import { CarpoolingViewModel } from "app/modelview/carpooling.view.model";

import { CarpoolingService } from "app/service/carpooling.service";
import { ReservationService } from "app/service/reservation.service";

@Component({
  selector: "dashboard-trajet",
  templateUrl: "./dashboard-trajet.component.html",
  styleUrls: ["../dashboard.component.css", "./dashboard-trajet.component.css"],
  providers: [CarpoolingService, ReservationService]
})
export class DashboardTrajetComponent implements OnInit {
  carpoolings: Carpooling[] = [];
  reservations: Reservation[] = [];
  tabSet: any[];

  constructor(
    private _carpoolingService: CarpoolingService,
    private _reservationService: ReservationService
  ) {
    this.tabSet = [
      {
        name: "Réservations",
        index: 1,
        subTabSet: ["En attentes", "Acceptées", "Refusées"],
        lists: [[], [], []]
      },
      {
        name: "Publications",
        index: 2,
        subTabSet: ["Avec Places disponibles", "Complets"],
        lists: [[], []]
      },
      {
        name: "Propositions reçues",
        index: 3,
        subTabSet: ["Avec Places disponibles", "Complets"],
        lists: [[], []]
      },
      {
        name: "Trajets à venir",
        index: 4,
        subTabSet: ["En Passager", "En conducteur"],
        lists: [[], [], []]
      }
    ];
  }

  ngOnInit() {
    this._carpoolingService.findCarpoolings(true).subscribe(resultList => {
      this.carpoolings.push.apply(this.carpoolings, resultList);

      this.tabSet[0].lists[0] = this.buildTabPropositions(this.carpoolings);
      this.tabSet[0].lists[1] = this.buildTabPropositions(this.carpoolings);
      this.tabSet[0].lists[2] = this.buildTabPropositions(this.carpoolings);

      this.tabSet[1].lists[0] = this.buildTabPropositions(this.carpoolings);
      this.tabSet[1].lists[1] = this.buildTabPropositions(this.carpoolings);

      this.tabSet[2].propositions = this.buildTabPropositions(this.carpoolings);
    });

    this._reservationService
      .findUserReservations("di1", "E")
      .subscribe(resultList => {
        this.reservations.push.apply(this.reservations, resultList);
      });
  }

  newCarpoolingViewModel(carpooling: Carpooling): CarpoolingViewModel {
    return new CarpoolingViewModel(carpooling);
  }

  buildTabPropositions(carpoolings: Carpooling[]): any[] {
    return [
      {
        aller: this.carpoolings[0],
        retour: this.carpoolings[0],
        driver: this.carpoolings[0].driver
      },
      {
        aller: this.carpoolings[1],
        retour: this.carpoolings[1],
        driver: this.carpoolings[1].driver
      },
      {
        aller: this.carpoolings[2],
        retour: undefined,
        driver: this.carpoolings[2].driver
      },
      {
        aller: this.carpoolings[3],
        retour: undefined,
        driver: this.carpoolings[3].driver
      }
    ];
  }
}
