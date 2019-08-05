import { Component, OnInit, Input } from "@angular/core";

import { Proposition } from "app/model/proposition";
import { Carpooling } from "app/model/carpooling";

@Component({
  selector: "propositions-panel",
  templateUrl: "./propositions-panel.component.html",
  styleUrls: ["./propositions-panel.component.css"]
})
export class PropositionsPanelComponent implements OnInit {
  @Input() name: string;
  @Input() subTabSet: string[];
  @Input() propositions: Proposition[];

  lists: Proposition[][] = [[], []];

  constructor() {}

  ngOnInit() {
    this.lists[0] = this.propositions;
    this.lists[1] = this.propositions;
  }

  isAllerRetour(prop: Proposition): boolean {
    return prop && prop.offres.length === 2;
  }

  isCpAller(cp: Carpooling): boolean {
    return (
      cp.dateTimeRetour !== undefined ||
      (cp.dateTimeAller === undefined && cp.dateTimeRetour !== undefined)
    );
  }
}
