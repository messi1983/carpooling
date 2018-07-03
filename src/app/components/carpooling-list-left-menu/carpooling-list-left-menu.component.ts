import { Component, Input, OnInit } from '@angular/core';
import { ENTER, COMMA} from '@angular/cdk/keycodes';

import { ICarpooling } from 'app/model/carpooling';
import { CarpoolingService } from 'app/service/carpooling.service';

@Component({
  selector: 'carpooling-list-left-menu',
  templateUrl: './carpooling-list-left-menu.component.html',
  styleUrls: ['./carpooling-list-left-menu.component.css']
})
export class CarpoolingListLeftMenuComponent implements OnInit {
    
    @Input() covoiturages: any;
    
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

    ngOnInit() {
    }
    
    removeChip(cov: any): void {
        this._carpoolingService.removeFromList(cov, this.covoiturages[0].covs);
     }
}
