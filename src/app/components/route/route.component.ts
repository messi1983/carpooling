import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "route",
  templateUrl: "./route.component.html",
  styleUrls: ["./route.component.css"]
})
export class RouteComponent implements OnInit {
  @Input() trajet: any;
  @Input() detail: boolean = false;
  @Input() restrictDesc: boolean = false;

  @Input() isDetail: boolean;
  @Input() allerRetour: boolean;
  @Input() isAller: boolean = true;

  default: boolean = true;

  constructor() {}

  ngOnInit() {
    this.default = !this.detail;
  }
}
