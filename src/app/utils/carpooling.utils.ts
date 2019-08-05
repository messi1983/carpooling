import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/catch";

import { CarpoolingViewModel } from "app/modelview/carpooling.view.model";

export class CarpoolingUtils {
  constructor() {}

  public static existAcceptionAutoSurSelections(
    selections: Map<number, CarpoolingViewModel>
  ): boolean {
    let carpoolings = Array.from(selections.values());
    return (
      carpoolings.filter((cp: CarpoolingViewModel) => cp.acceptationAuto)
        .length !== 0
    );
  }
}
