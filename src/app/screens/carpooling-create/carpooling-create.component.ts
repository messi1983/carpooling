import { Component } from "@angular/core";
import { MatStepper, MatDialog, MatDialogRef } from "@angular/material";

import { CarpoolerUserSelectionComponent } from "../../components/carpooler-user-selection/carpooler-user-selection.component";
import { CarpoolingWarningMessageComponent } from "../../components/carpooling-warning-message/carpooling-warning-message.component";

import { AbstractStepperComponent } from "app/components/abstract.stepper.component";

import { CarpoolerService } from "app/service/carpooler.service";
import { CarpoolerViewModelService } from "app/service/carpooler.view.model.service";

import { CarpoolerViewModel } from "app/modelview/carpooler.view.model";

@Component({
  selector: "carpooling-create",
  templateUrl: "./carpooling-create.component.html",
  styleUrls: ["./carpooling-create.component.css"]
})
export class CarpoolingCreateComponent extends AbstractStepperComponent {
  isHeureAllerHeureAffluence: boolean = true;
  isHeureAllerRetourAffluence: boolean = false;
  doNotUseTraffic: any = { value: false };

  idDriver: string = "";
  filters: string[] = [];

  carpoolers: CarpoolerViewModel[] = [];
  selection: CarpoolerViewModel[] = [];

  constructor(
    private _dialog: MatDialog,
    private _carpoolerService: CarpoolerService,
    private _carpoolerViewModelService: CarpoolerViewModelService
  ) {
    super();
  }

  ngOnInit() {}

  openPreselectionDialog(): void {
    if (this.carpoolers.length === 0) {
      this._carpoolerService
      .get50Carpoolers(this.idDriver, this.filters)
      .subscribe(carpoolers => {
        this.carpoolers.push.apply(
          this.carpoolers,
          this._carpoolerViewModelService.creerListeCarpoolersVM(carpoolers)
        );
        this.launchPreselectionDialog();
      });
    } else {
      this.launchPreselectionDialog();
    }
  }

  showWarningDepartureHourDialog(): MatDialogRef<
    CarpoolingWarningMessageComponent,
    boolean
  > {
    return this._dialog.open(CarpoolingWarningMessageComponent, {
      width: "600px",
      data: { typeWarning: "CP_CREATE" }
    });
  }

  goForward(stepper: MatStepper): void {
    if (
      this.currentStep === 1 &&
      this.isHeureAllerHeureAffluence &&
      !this.doNotUseTraffic.value
    ) {
      const dialogRef = this.showWarningDepartureHourDialog();
      dialogRef.afterClosed().subscribe(response => {
        if (response) {
          super.goForward(stepper);
        }
      });
    } else {
      super.goForward(stepper);
    }
  }

  isCovAllerRetour(): boolean {
    return true;
  }

  private launchPreselectionDialog() {
    const dialogRef = this._dialog.open(CarpoolerUserSelectionComponent, {
      width: "720px",
      data: { carpoolers: this.carpoolers }
    });
    dialogRef.afterClosed().subscribe(response => {
      this.selection = response;
      console.log(response);
    });
  }
}
