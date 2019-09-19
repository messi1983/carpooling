import { Component, Input, OnInit } from "@angular/core";

import { CarpoolerViewModel } from "app/modelview/carpooler.view.model";

@Component({
  selector: "carpooler-card",
  templateUrl: "./carpooler-card.component.html",
  styleUrls: ["./carpooler-card.component.css"]
})
export class CarpoolerCardComponent implements OnInit {
  @Input() carpooler: CarpoolerViewModel;
  @Input() disabledSelection: boolean = false;

  constructor() {}

  ngOnInit() {}

  notifySelection() {
    this.carpooler.selected = !this.carpooler.selected;
  }
}
