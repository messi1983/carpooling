import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA} from '@angular/cdk/keycodes';

import { ICarpooling } from 'app/model/carpooling';
import { CarpoolingService } from 'app/service/carpooling.service';


@Component({
  selector: 'carpoolings-list',
  templateUrl: './carpoolings-list.component.html',
  styleUrls: ['./carpoolings-list.component.css'],
  providers: [CarpoolingService]
})
export class CarpoolingsListComponent implements OnInit {
    carpoolings: ICarpooling[];
    tabsCarpoolings : string[] = [ 'DISPONIBLES (110)', 'COMPLETS (0)' ];
    tabsDays : string[] = [ "Aujourd'hui", "Demain" ];
    
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];

    covsAller = [
    ];
    
     covsRetour = [
    ];
    
    covoiturages = [
        { title: 'Vos covs Aller', covs: this.covsAller },
        { title: 'Vos covs Retour', covs: this.covsRetour }
    ];
    
    currentPage = 4;
    totalItems : number = 5;
    itemsPerPage : number = 2;
    selectedCarpooling: ICarpooling;
    autoriserSelection: boolean = false;
    
    constructor(private _carpoolingService: CarpoolingService) { }

    ngOnInit() {
        this._carpoolingService.getCarpoolings('/18-12-2017').subscribe(carpoolings =>this.carpoolings=carpoolings);
    }
    
    select(selection: any): void {
        this.selectedCarpooling = selection.carpooling;
        if(selection.check) {
            if(this.selectedCarpooling.acceptationAuto) {
                this.removeChips();
                this.autoriserSelection = true;
            }
            this.covsAller.push(this.selectedCarpooling);
        } else {
            this.removeChip(this.selectedCarpooling);
            this.autoriserSelection = false;
        }
    }
    
    showDetailt(carpooling: any): void {
      this.selectedCarpooling = carpooling;
    }
    
     removeChip(cov: any): void {
        cov.checked = false;
        let index = this.covsAller.indexOf(cov);
        if (index >= 0) {
         this.covsAller.splice(index, 1);
        }
     }
    
    removeChips(): void {
        while(this.covsAller.length > 0) { 
           this.removeChip(this.covsAller[0]);
        } 
     }
    
    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
//        this.carpoolings = this._carpoolingService.getCarpoolings('/18-12-2017').subscribe(carpoolings =>this.carpoolings=carpoolings);;
    }
    
}

