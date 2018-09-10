import { Component, Input } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA} from '@angular/cdk/keycodes';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { ResultSearchViewModel } from 'app/modelview/result.search.view.model';

import { CarpoolingEvent } from 'app/event/carpooling.event';

import { CarpoolingService } from 'app/service/carpooling.service';

@Component({
  selector: 'result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent {
    @Input() resultSearch: ResultSearchViewModel;
    
    visible: boolean = true;
    addOnBlur: boolean = true;
    
    heureDepartCroissant: boolean = false;
    heureDepartDecroissant: boolean = false;
    
    prixPlaceCroissant: boolean = false;
    prixPlaceDecroissant: boolean = false;
    
    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];
    
    currentPage = 4;
    totalItems : number = 5;
    itemsPerPage : number = 2;
    
    constructor(private _carpoolingService: CarpoolingService) { }
    
    select(event: CarpoolingEvent): void {
        let isAller = event.isAller;
        let selection = event.carpooling.getSimpleCarpooling(isAller);
        if(selection.checked) {
            if(selection.acceptationAuto) {
                this._carpoolingService.cleanList(this.resultSearch.selections, isAller);
            }
            this._carpoolingService.addToList(event.carpooling, this.resultSearch.selections);
        } else {
            this._carpoolingService.removeFromList(event.carpooling, this.resultSearch.selections, isAller);
        }
    }
    
    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
//        this.carpoolings = this._carpoolingService.getCarpoolings('/18-12-2017').subscribe(carpoolings =>this.carpoolings=carpoolings);;
    }
    
}
