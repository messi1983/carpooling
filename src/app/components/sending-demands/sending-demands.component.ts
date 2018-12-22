import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { AbstractSelectionComponent } from 'app/components-shared/abstract.selection.component';

import { ApprovDialogComponent } from 'app/dialogboxes/approv-dialog/approv-dialog.component';


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent extends AbstractSelectionComponent {

    conditionsChecked: boolean = false;
    insufficientAccount: boolean = false;
    
    constructor(public _dialog: MatDialog) {
        super();
    }
    
    openApprovisionnementDialog(): void {
        this._dialog.open(ApprovDialogComponent, {
            width: '850px',
        });
    }

}
