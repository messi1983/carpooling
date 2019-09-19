import { Input } from "@angular/core";

import { CarpoolingViewModel } from "app/modelview/carpooling.view.model";

export abstract class AbstractSelectionComponent {
  @Input() selectionsAller: Map<number, CarpoolingViewModel>;
  @Input() selectionsRetour: Map<number, CarpoolingViewModel>;

  getSelectionsAller(): CarpoolingViewModel[] {
    return Array.from(this.selectionsAller.values());
  }

  getSelectionsRetour(): CarpoolingViewModel[] {
    return Array.from(this.selectionsRetour.values());
  }
}
