import { Component, OnInit, Input } from "@angular/core";

import { Reservation } from "app/model/reservation";
import { Carpooler } from "app/model/carpooler";
import { Carpooling } from "app/model/carpooling";

@Component({
  selector: "res-prop-item",
  templateUrl: "./res-prop-item.component.html",
  styleUrls: ["./res-prop-item.component.css"]
})
export class ResPropItemComponent implements OnInit {
  @Input() res: any;
  @Input() type: string = "reservation";

  constructor() {}

  ngOnInit() {}

  isAllerRetour(item: any): boolean {
    if (this.type === "reservation") {
      return item && item.demandes.length === 2;
    }
    return item && item.offres.length === 2;
  }

  isCpAller(cp: Carpooling): boolean {
    return (
      cp.dateTimeRetour !== undefined ||
      (cp.dateTimeAller === undefined && cp.dateTimeRetour !== undefined)
    );
  }

  getDriver(): Carpooler {
    if (this.type === "reservation") {
      return this.res.demandes[0].carpooling.driver;
    }
    return this.res.offres[0].carpooling.driver;
  }

  getItem(idx: number): any {
    if (this.type === "reservation") {
      return this.res.demandes[idx];
    }
    return this.res.offres[idx];
  }

  isReservation(): boolean {
    return this.type === "reservation";
  }
}
