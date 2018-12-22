import { Component, Input, OnInit } from '@angular/core';

import { SimpleCarpooling } from 'app/model/simple.carpooling';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

import { CarpoolingService } from 'app/service/carpooling.service';
import { CarpoolingUtils } from 'app/utils/carpooling.utils';

import { AbstractSelectionComponent } from 'app/components-shared/abstract.selection.component';

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css'],
  providers: [CarpoolingService]
})
export class UserSelectionComponent extends AbstractSelectionComponent {
    heureDepartCroissant: boolean = false;
    heureDepartDecroissant: boolean = false;
    
    prixPlaceCroissant: boolean = false;
    prixPlaceDecroissant: boolean = false;
    
    constructor() {
        super();
    }
    
    expandPanel(matExpansionPanel: any, event: Event): void {
        event.stopPropagation(); 
        
        if (!this._isExpansionIndicator(event.target)) {
            matExpansionPanel.toggle(); 
        }
    }
    
    private _isExpansionIndicator(target: EventTarget): boolean {
//        const expansionIndicatorClass = 'mat-expansion-indicator';
//        return (target.classList && target.classList.contains(expansionIndicatorClass) );
        return true;
    }

}