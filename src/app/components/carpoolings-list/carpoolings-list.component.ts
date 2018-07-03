import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

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
    
    selectionCovsAller:ICarpooling[] = [];
    selectionCovsRetour:ICarpooling[] = [];
    
    covoiturages = [
        { 
            title: 'Vos covs Aller',
            covs: this.selectionCovsAller,
            tabsDays: this.tabsDays,
            tabsCarpoolings: this.tabsCarpoolings,
            carpoolings: null,
            selection: null
        },
        {
            title: 'Vos covs Retour',
            covs: this.selectionCovsRetour,
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
 
}

