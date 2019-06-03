import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { MatDialog } from "@angular/material";

import { rotation } from "app/animation/rotation.animation";
import { CarpoolingWarningMessageComponent } from "app/screens/carpoolings-list/carpooling-result-search/carpooling-card/dialog/carpooling-warning-message/carpooling-warning-message.component";
import { CarpoolingDetailComponent } from "app/components/dialog/carpooling-detail/carpooling-detail.component";
import { RouteMapComponent } from "app/components/dialog/route-map/route-map.component";

import { CarpoolingViewModel } from "app/modelview/carpooling.view.model";
import { CarpoolingEvent } from "app/event/carpooling.event";

import { CarpoolingUtils } from "app/utils/carpooling.utils";

import { AbstractRotateComponent } from "app/components/abstract.rotate.component";

@Component({
  selector: "carpooling-card",
  templateUrl: "./carpooling-card.component.html",
  styleUrls: ["./carpooling-card.component.css"],
  animations: [rotation]
})
export class CarpoolingCardComponent extends AbstractRotateComponent {
  @Input() carpooling: CarpoolingViewModel;
  @Input() selections: CarpoolingViewModel[];

  @Output() notifySelection = new EventEmitter<CarpoolingEvent>();

  constructor(public _dialog: MatDialog) {
    super();
  }

  onNotifySelection(event: MatCheckboxChange): void {
    this.current.checked = event.checked;
    if (event.checked) {
      if (this.current.acceptationAuto) {
        this.openAutoAcceptationDialog();
      } else {
        this.notifySelection.emit(
          new CarpoolingEvent(this.carpooling, this.isAller)
        );
      }
    } else {
      this.notifySelection.emit(
        new CarpoolingEvent(this.carpooling, this.isAller)
      );
    }
  }

  onShowMap(): void {
    this._dialog.open(RouteMapComponent, {
      width: "500px",
      data: { carpooling: this.carpooling }
    });
  }

  openAutoAcceptationDialog(): void {
    const dialogRef = this._dialog.open(CarpoolingWarningMessageComponent, {
      width: "600px",
      data: { typeWarning: "ACC_AUTO" }
    });
    this.treatDialogReturn(dialogRef);
  }

  onShowDetail(): void {
    const dialogRef = this._dialog.open(CarpoolingDetailComponent, {
      width: "700px",
      data: this.carpooling
    });
    this.treatDialogReturn(dialogRef);
  }

  disabledAction(): boolean {
    return (
      (this.countSelections() === 4 ||
        this.existAcceptionAutoSurSelections()) &&
      !this.current.checked
    );
  }

  protected getCarpooling(): CarpoolingViewModel {
    return this.carpooling;
  }

  private treatDialogReturn(dialogRef: any): void {
    dialogRef.afterClosed().subscribe(response => {
      this.current.checked = response;
      this.notifySelection.emit(
        new CarpoolingEvent(this.carpooling, this.isAller)
      );
    });
  }

  private countSelections(): number {
    return CarpoolingUtils.countSelections(this.selections, this.isAller);
  }

  private existAcceptionAutoSurSelections(): boolean {
    if (this.isAller) {
      return CarpoolingUtils.existAcceptionAutoSurSelectionsAller(
        this.selections
      );
    }
    return CarpoolingUtils.existAcceptionAutoSurSelectionsRetour(
      this.selections
    );
  }
}