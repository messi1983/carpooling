import { Component, OnInit, Input } from "@angular/core";
import { Proposition } from "app/model/proposition";

@Component({
  selector: "propositions-panel",
  templateUrl: "./propositions-panel.component.html",
  styleUrls: ["./propositions-panel.component.css"]
})
export class PropositionsPanelComponent implements OnInit {
  @Input() subTabSet: string[];
  @Input() propositions: Proposition[];

  lists: Proposition[][] = [[], []];

  constructor() {}

  ngOnInit() {
    this.lists[0] = this.propositions;
    this.lists[1] = this.propositions;
  }
}
