import { Component, OnInit } from "@angular/core";
import { MatStepper, MatDialog } from "@angular/material";

import { CarpoolingWarningMessageComponent } from "app/screens/carpoolings-list/carpooling-card/dialog/carpooling-warning-message/carpooling-warning-message.component";
import { CarpoolingDetailComponent } from "app/components/dialog/carpooling-detail/carpooling-detail.component";
import { RouteMapComponent } from "app/components/dialog/route-map/route-map.component";

import { Trajet } from "app/model/trajet";

import { CarpoolingEvent } from "app/event/carpooling.event";

import { Carpooling } from "app/model/carpooling";

import { CarpoolingViewModel } from "app/modelview/carpooling.view.model";
import { ResultSearchViewModel } from "app/modelview/result.search.view.model";

import { CarpoolingService } from "app/service/carpooling.service";
import { CarpoolingUtils } from "app/utils/carpooling.utils";

import { AbstractStepperComponent } from "app/components/abstract.stepper.component";

@Component({
  selector: "carpoolings-list",
  templateUrl: "./carpoolings-list.component.html",
  styleUrls: ["./carpoolings-list.component.css"],
  providers: [CarpoolingService]
})
export class CarpoolingsListComponent extends AbstractStepperComponent
  implements OnInit {
  trajetAller: Trajet = new Trajet("Bordeaux", "Toulouse", null, null);
  trajetRetour: Trajet = new Trajet("Toulouse", "Bordeaux", null, null);

  selectionsAller: Map<number, CarpoolingViewModel> = new Map();
  selectionsRetour: Map<number, CarpoolingViewModel> = new Map();

  resultsSearch: ResultSearchViewModel[] = [
    new ResultSearchViewModel(
      true,
      "Vos covs Aller",
      ["Aujourd'hui", "Demain"],
      ["DISPONIBLES (110)", "COMPLETS (0)"],
      []
    ),
    new ResultSearchViewModel(
      false,
      "Vos covs Retour",
      ["Vendredi", "Samedi"],
      ["DISPONIBLES (10)", "COMPLETS (7)"],
      []
    )
  ];

  quotaReached: boolean = false;

  constructor(
    public _dialog: MatDialog,
    private _carpoolingService: CarpoolingService
  ) {
    super();
  }

  ngOnInit() {
    this._updateCarpoolingsList(true);
  }

  onClick(event: CarpoolingEvent): void {
    switch (event.action) {
      case "selection": {
        this.onSelect(event);
        break;
      }
      case "detail": {
        this.onDetail(event);
        break;
      }
      case "mapRoute": {
        this.onMapRoute(event);
        break;
      }
      case "recuperation": {
        const selections = this.getSelections(event.isAller);
        const carpooling = event.carpooling;
        carpooling.checked = selections.has(carpooling.id);
        break;
      }
    }
  }

  goForward(stepper: MatStepper): void {
    super.goForward(stepper);
    if (this.currentStep === 2) {
      this.goToStepRetours();
    }
  }

  goToStepRetours(): void {
    if (this.resultsSearch[1].carpoolings.length === 0) {
      this._updateCarpoolingsList(false);
    }
  }

  disabledButtonNext(): boolean {
    if (this.currentStep < 3) {
      return this.countSelections(this.currentStep === 1) === 0;
    }
    return super.disabledButtonNext();
  }

  newCarpoolingViewModel(carpooling: Carpooling): CarpoolingViewModel {
    return new CarpoolingViewModel(carpooling);
  }

  private _updateCarpoolingsList(isAller: boolean): void {
    const resultsSearch = isAller
      ? this.resultsSearch[0]
      : this.resultsSearch[1];

    this._carpoolingService.findCarpoolings(isAller).subscribe(carpoolings => {
      resultsSearch.carpoolings.push.apply(
        resultsSearch.carpoolings,
        carpoolings
      );
    });
  }

  private onSelect(event: CarpoolingEvent): void {
    let isAller = event.isAller;
    let selection = event.carpooling;

    if (selection.checked) {
      if (selection.acceptationAuto) {
        this.openAutoAcceptationDialog(selection, isAller);
      } else {
        this.getSelections(isAller).set(selection.id, selection);
        this.checkQuota(isAller);
      }
    } else {
      this.getSelections(isAller).delete(selection.id);
      this.checkQuota(isAller);
    }
  }

  private onDetail(event: CarpoolingEvent): void {
    const dialogRef = this._dialog.open(CarpoolingDetailComponent, {
      width: "700px",
      data: event.carpooling
    });
    dialogRef.afterClosed().subscribe(response => {
      this.onSelect(response);
    });
  }

  private onMapRoute(event: CarpoolingEvent): void {
    this._dialog.open(RouteMapComponent, {
      width: "500px",
      data: { carpooling: event.carpooling }
    });
  }

  private openAutoAcceptationDialog(selection: any, isAller: boolean): void {
    const dialogRef = this._dialog.open(CarpoolingWarningMessageComponent, {
      width: "600px",
      data: { typeWarning: "ACC_AUTO" }
    });
    dialogRef.afterClosed().subscribe(response => {
      selection.checked = response;
      if (response) {
        this.getSelections(isAller).forEach(function(cp) {
          cp.checked = false;
        });
        this.getSelections(isAller).clear();
        this.getSelections(isAller).set(selection.id, selection);
      }
      this.checkQuota(isAller);
    });
  }

  private checkQuota(isAller: boolean): void {
    this.quotaReached =
      this.countSelections(isAller) === 4 ||
      this.existAcceptionAutoSurSelections(isAller);
  }

  private countSelections(isAller: boolean): number {
    return this.getSelections(isAller).size;
  }

  private existAcceptionAutoSurSelections(isAller: boolean): boolean {
    let selections = this.getSelections(isAller);
    return CarpoolingUtils.existAcceptionAutoSurSelections(selections);
  }

  private getSelections(isAller: boolean): Map<number, CarpoolingViewModel> {
    return isAller ? this.selectionsAller : this.selectionsRetour;
  }
}
