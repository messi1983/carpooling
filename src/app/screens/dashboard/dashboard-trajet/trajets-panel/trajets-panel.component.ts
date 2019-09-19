import { Component, OnInit, Input } from "@angular/core";

import { Carpooling } from "app/model/carpooling";

@Component({
  selector: "trajets-panel",
  templateUrl: "./trajets-panel.component.html",
  styleUrls: ["./trajets-panel.component.css"]
})
export class TrajetsPanelComponent implements OnInit {
  @Input() subTabSet: string[];
  @Input() carpoolings: Carpooling[];

  lists: Carpooling[][] = [[], []];

  constructor() {}

  ngOnInit() {
    this.lists[0] = this.carpoolings;
    this.lists[1] = this.carpoolings;
  }

  // isAllerRetour(prop: Carpoolings): boolean {
  //   return prop && prop.offres.length === 2;
  // }

  isCpAller(cp: Carpooling): boolean {
    return (
      cp.dateTimeRetour !== undefined ||
      (cp.dateTimeAller === undefined && cp.dateTimeRetour !== undefined)
    );
  }
}
