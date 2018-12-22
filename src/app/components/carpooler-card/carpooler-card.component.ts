import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "carpooler-card",
  templateUrl: "./carpooler-card.component.html",
  styleUrls: ["./carpooler-card.component.css"]
})
export class CarpoolerCardComponent implements OnInit {
  @Input() carpooler: any;
  selected: boolean = false;

  constructor() {}

  ngOnInit() {}

  notifySelection() {
    this.selected = !this.selected;
  }
}
