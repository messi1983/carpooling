import { Component, Input } from "@angular/core";

import { Carpooling } from "app/model/carpooling";

import { AbstractSelectionComponent } from "app/components/abstract.selection.component";

import { CarpoolingService } from "app/service/carpooling.service";

@Component({
  selector: "user-selection",
  templateUrl: "./carpooling-user-selection.component.html",
  styleUrls: ["./carpooling-user-selection.component.css"]
})
export class CarpoolingUserSelectionComponent extends AbstractSelectionComponent {
  constructor() {
    super();
  }

  expandPanel(matExpansionPanel: any, event: Event): void {
    event.stopPropagation();

    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.toggle();
    }
  }

  private _isExpansionIndicator(target: EventTarget): boolean {
    //        const expansionIndicatorClass = 'mat-expansion-indicator';
    //        return (target.classList && target.classList.contains(expansionIndicatorClass) );
    return true;
  }
}
