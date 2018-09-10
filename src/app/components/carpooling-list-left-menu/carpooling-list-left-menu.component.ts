import { Component, Input } from '@angular/core';
import { ENTER, COMMA} from '@angular/cdk/keycodes';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

import { CarpoolingService } from 'app/service/carpooling.service';

@Component({
  selector: 'carpooling-list-left-menu',
  templateUrl: './carpooling-list-left-menu.component.html',
  styleUrls: ['./carpooling-list-left-menu.component.css']
})
export class CarpoolingListLeftMenuComponent {
    @Input() selections: CarpoolingViewModel[];
    
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;
    
    heureDepartCroissant: boolean = false;
    heureDepartDecroissant: boolean = false;
    
    prixPlaceCroissant: boolean = false;
    prixPlaceDecroissant: boolean = false;
    
    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];
    
    constructor(private _carpoolingService: CarpoolingService) { }
    
    removeChip(carpooling: CarpoolingViewModel, isAller: boolean): void {
        carpooling.getSimpleCarpooling(isAller).checked = false;
        this._carpoolingService.removeFromList(carpooling, this.selections, isAller);
     }
    
    existAllers(): boolean {
        return this._carpoolingService.existAllers(this.selections);
    }
    
    existReturns(): boolean {
        return this._carpoolingService.existReturns(this.selections);
    }
    
    getSelectionsAller(): CarpoolingViewModel[] {
        return this._carpoolingService.filterSelectionsAller(this.selections);
    }
    
    getSelectionsRetour(): CarpoolingViewModel[] {
        return this._carpoolingService.filterSelectionsRetour(this.selections);
    }
    
}
