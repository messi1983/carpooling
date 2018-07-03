import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA} from '@angular/cdk/keycodes';

import { ICarpooling } from 'app/model/carpooling';
import { CarpoolingService } from 'app/service/carpooling.service';

@Component({
  selector: 'result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

    @Input() covoiturages: any;
    
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
    selectedCarpooling: ICarpooling;
    autoriserSelection: boolean = false;
    
    constructor(private _carpoolingService: CarpoolingService) { }

    ngOnInit() {
    }
    
    select(selection: any): void {
        this.selectedCarpooling = selection.carpooling;
        if(selection.check) {
            if(this.selectedCarpooling.acceptationAuto) {
                this._carpoolingService.cleanList(this.covoiturages.covs);
                this.autoriserSelection = true;
            }
            this.covoiturages.covs.push(this.selectedCarpooling);
        } else {
            this._carpoolingService.removeFromList(this.selectedCarpooling, this.covoiturages.covs);
            this.autoriserSelection = false;
        }
    }
    
    showDetailt(carpooling: any): void {
      this.selectedCarpooling = carpooling;
    }
    
    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
//        this.carpoolings = this._carpoolingService.getCarpoolings('/18-12-2017').subscribe(carpoolings =>this.carpoolings=carpoolings);;
    }

}
