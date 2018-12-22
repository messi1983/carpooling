import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatStepper } from "@angular/material";

import { AbstractStepperComponent } from "app/components/abstract.stepper.component";

import { CarpoolerViewModel } from "app/modelview/carpooler.view.model";

import { CarpoolerService } from "app/service/carpooler.service";
import { CarpoolerViewModelService } from "app/service/carpooler.view.model.service";

@Component({
  selector: "app-carpooler-user-selection",
  templateUrl: "./carpooler-user-selection.component.html",
  styleUrls: ["./carpooler-user-selection.component.css"],
  providers: [CarpoolerService, CarpoolerViewModelService]
})
export class CarpoolerUserSelectionComponent extends AbstractStepperComponent
  implements OnInit {
  carpoolers: CarpoolerViewModel[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _carpoolerService: CarpoolerService,
    private _carpoolerViewModelService: CarpoolerViewModelService
  ) {
    super();
  }

  ngOnInit() {
    this._carpoolerService
      .getCarpoolersList(this.data.idDriver, this.data.filters)
      .subscribe(carpoolers => {
        this.carpoolers.push.apply(
          this.carpoolers,
          this._carpoolerViewModelService.creerListeCarpoolersVM(carpoolers)
        );
      });
  }

  validate() {
    console.log('Validated selection')
  }
}
