import { Component, OnInit, Input } from "@angular/core";

import { Reservation } from "app/model/reservation";

@Component({
  selector: "reservations-panel",
  templateUrl: "./reservations-panel.component.html",
  styleUrls: ["./reservations-panel.component.css"]
})
export class ReservationsPanelComponent implements OnInit {
  @Input() subTabSet: string[];
  @Input() reservations: Reservation[];

  lists: Reservation[][] = [[], []];

  constructor() {}

  ngOnInit() {
    this.lists[0] = this.reservations;
    this.lists[1] = this.reservations;
  }
}
