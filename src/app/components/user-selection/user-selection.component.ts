import { Component, Input, OnInit } from '@angular/core';

import { SimpleCarpooling } from 'app/model/simple.carpooling';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

import { CarpoolingService } from 'app/service/carpooling.service';

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css'],
  providers: [CarpoolingService]
})
export class UserSelectionComponent {
    panelOpenState: boolean = false;
    @Input() selections: CarpoolingViewModel[];
    
    heureDepartCroissant: boolean = false;
    heureDepartDecroissant: boolean = false;
    
    prixPlaceCroissant: boolean = false;
    prixPlaceDecroissant: boolean = false;
    
    constructor( private _carpoolingService: CarpoolingService) { }
    
    expandPanel(matExpansionPanel: any, event: Event): void {
        event.stopPropagation(); 
        
        if (!this._isExpansionIndicator(event.target)) {
            matExpansionPanel.toggle(); 
        }
    }
    
    getSelectionsAller(): CarpoolingViewModel[] {
        return this._carpoolingService.filterSelectionsAller(this.selections);
    }
    
    getSelectionsRetour(): CarpoolingViewModel[] {
        return this._carpoolingService.filterSelectionsRetour(this.selections);
    }
  
    private _isExpansionIndicator(target: EventTarget): boolean {
//        const expansionIndicatorClass = 'mat-expansion-indicator';
//        return (target.classList && target.classList.contains(expansionIndicatorClass) );
        return true;
    }

}