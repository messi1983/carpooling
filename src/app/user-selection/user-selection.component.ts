import { Component, OnInit } from '@angular/core';

import { ICarpooling } from 'app/model/carpooling';
import { CarpoolingService } from 'app/service/carpooling.service';

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css'],
  providers: [CarpoolingService]
})
export class UserSelectionComponent implements OnInit {
    panelOpenState: boolean = false;
    covsAller: ICarpooling[];
    
    covoiturages = [];
    covsRetour = [];
    
    constructor(private _carpoolingService: CarpoolingService) { }
    
    ngOnInit() {
        this._carpoolingService.getSelectedCarpoolings().subscribe(carpoolings => { 
            this.covsAller=carpoolings;
            this.covsRetour=carpoolings;
            
             this.covoiturages = [
                { title: 'Covoiturages Aller sélectionnés', covs: this.covsAller },
                { title: 'Covoiturages Retour sélectionnés', covs: this.covsRetour }
            ];
        });
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