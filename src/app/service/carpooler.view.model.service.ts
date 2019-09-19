import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

import { Carpooler } from "app/model/carpooler";
import { CarpoolerViewModel } from "app/modelview/carpooler.view.model";

@Injectable()
export class CarpoolerViewModelService {
  constructor() {}

  public creerListeCarpoolersVM(modelsList: Carpooler[]): CarpoolerViewModel[] {
    return modelsList.map(
      (carpooler: Carpooler) => new CarpoolerViewModel(carpooler)
    );
  }
}
