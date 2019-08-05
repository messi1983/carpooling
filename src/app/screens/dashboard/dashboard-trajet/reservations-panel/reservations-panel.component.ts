import { Component, OnInit, Input } from "@angular/core";

import { Reservation } from "app/model/reservation";
import { Carpooling } from "app/model/carpooling";

@Component({
  selector: "reservations-panel",
  templateUrl: "./reservations-panel.component.html",
  styleUrls: ["./reservations-panel.component.css"]
})
export class ReservationsPanelComponent implements OnInit {
  @Input() name: string;
  @Input() subTabSet: string[];
  @Input() reservations: Reservation[];

  lists: Reservation[][] = [[], []];

  constructor() {}

  ngOnInit() {
    this.lists[0] = this.reservations;
    this.lists[1] = this.reservations;
  }

  isAllerRetour(res: Reservation): boolean {
    return res && res.demandes.length === 2;
  }

  isCpAller(cp: Carpooling): boolean {
    return (
      cp.dateTimeRetour !== undefined ||
      (cp.dateTimeAller === undefined && cp.dateTimeRetour !== undefined)
    );
  }
}
