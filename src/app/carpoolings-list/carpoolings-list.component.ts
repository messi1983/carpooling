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
    tabsCarpoolings : string[] = [ 'DISPONIBLES (110)', 'COMPLETS (0)' ];
    tabsDays : string[] = [ "Aujourd'hui", "Demain" ];
    
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;
    
    selectionAller:ICarpooling[];
    selectionRetour:ICarpooling[];

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];
    
    covsAller = [
    ];
    
     covsRetour = [
    ];
    
    covoiturages = [
        { 
            title: 'Vos covs Aller',
            covs: this.covsAller,
            tabsDays: this.tabsDays,
            tabsCarpoolings: this.tabsCarpoolings,
            carpoolings: null,
            selection: null
        },
        {
            title: 'Vos covs Retour',
            covs: this.covsRetour,
            tabsDays: this.tabsDays,
            tabsCarpoolings: this.tabsCarpoolings,
            carpoolings: null,
            selection: null
         }
    ];
    
    constructor(private _carpoolingService: CarpoolingService) { }

    ngOnInit() {
        this._carpoolingService.getCarpoolings('/18-12-2017').subscribe(carpoolings => {
            this.covoiturages[0].carpoolings = carpoolings;
            this.covoiturages[1].carpoolings = carpoolings;
        });
        
         this._carpoolingService.getSelectedCarpoolings().subscribe(carpoolings => { 
            this.covoiturages[0].selection = carpoolings;
            this.covoiturages[1].selection = carpoolings;
        });
    }
    
    removeChip(cov: any): void {
        this._carpoolingService.removeFromList(cov, this.covsAller);
     }
    
}

