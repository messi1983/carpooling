import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AbstractSelectionComponent } from 'app/components/abstract.selection.component';

import { AlimentationCompteComponent } from 'app/components/dialog/alimentation-compte/alimentation-compte.component';


@Component({
  selector: 'app-paiement',
  templateUrl: './sending-demands.component.html',
  styleUrls: ['./sending-demands.component.css']
})
export class SendingDemandsComponent extends AbstractSelectionComponent {

    conditionsChecked: boolean = false;
    insufficientAccount: boolean = false;
    
    constructor(public _dialog: MatDialog) {
        super();
    }
    
    openApprovisionnementDialog(): void {
        this._dialog.open(AlimentationCompteComponent, {
            width: '850px',
        });
    }

}
