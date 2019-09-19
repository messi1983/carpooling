import { Component, Input } from "@angular/core";

import { Carpooling } from "app/model/carpooling";

@Component({
  selector: "carpooling-item",
  templateUrl: "./carpooling-item.component.html",
  styleUrls: ["./carpooling-item.component.css"]
})
export class CarpoolingItemComponent {
  @Input() carpooling: Carpooling;

  constructor() {}
}
