import { Component, Input } from '@angular/core';

import { CarpoolingViewModel } from '../../../modelview/carpooling.view.model';

import { AbstractSelectionComponent } from '../../../common/abstract.selection.component';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent extends AbstractSelectionComponent {

    years = ['', '1999', '2000', '2001'];
    months = ['', '01', '02', '03'];
    
    constructor() {
        super();
    }

}
