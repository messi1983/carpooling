import { Component, OnInit } from "@angular/core";

import { rotation } from "app/animation/rotation.animation";

// import { CarpoolingEvent } from "app/event/carpooling.event";

import { AbstractRotateComponent } from "app/components/abstract.rotate.component";

import { CarpoolingService } from "app/service/carpooling.service";

@Component({
  selector: "carpooling-item",
  templateUrl: "./carpooling-item.component.html",
  styleUrls: ["./carpooling-item.component.css"],
  animations: [rotation]
})
export class CarpoolingItemComponent extends AbstractRotateComponent {
  constructor(carpoolingService: CarpoolingService) {
    super(carpoolingService);
  }

  // onSelect(event: MatCheckboxChange): void {
  //   this.click.emit(
  //     new CarpoolingEvent(this.current, this.isAller, "selection")
  //   );
  // }

  // onDetail(): void {
  //   this.click.emit(new CarpoolingEvent(this.current, this.isAller, "detail"));
  // }

  // onMapRoute(): void {
  //   this.click.emit(
  //     new CarpoolingEvent(this.current, this.isAller, "mapRoute")
  //   );
  // }
}
