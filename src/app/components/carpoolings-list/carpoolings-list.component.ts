import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

import { Trajet } from 'app/model/trajet';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { ResultSearchViewModel } from 'app/modelview/result.search.view.model';

import { CarpoolingService } from 'app/service/carpooling.service';
import { CarpoolingMapperService } from 'app/service/carpooling.mapper.service';

@Component({
  selector: 'carpoolings-list',
  templateUrl: './carpoolings-list.component.html',
  styleUrls: ['./carpoolings-list.component.css'],
  providers: [CarpoolingService, CarpoolingMapperService]
})
export class CarpoolingsListComponent implements OnInit {
    tabsCarpoolings : string[] = [ 'DISPONIBLES (110)', 'COMPLETS (0)' ];
    tabsDays : string[] = [ "Aujourd'hui", "Demain" ];
    
    selections: CarpoolingViewModel[] = [];
    
    trajetAller : Trajet = new Trajet('Bordeaux', 'Toulouse', null, null);
    trajetRetour : Trajet = new Trajet('Toulouse', 'Bordeaux', null, null);
    
    resultsSearch: ResultSearchViewModel[] = [
         new ResultSearchViewModel(
            'Vos covs Aller',
            this.tabsDays,
            this.tabsCarpoolings,
            this.selections,
            null
        ),
        new ResultSearchViewModel(
            'Vos covs Retour',
            this.tabsDays,
            this.tabsCarpoolings,
            this.selections,
            null
        )
    ];
    
    constructor(
        private _carpoolingService: CarpoolingService, 
        private _carpoolingMapperService: CarpoolingMapperService
    ) { }

    ngOnInit() {
        this._carpoolingService.getCarpoolingsList(
            this.trajetAller,
            '18-12-2017',
            4, true, true
        ).subscribe(carpoolings => {
            this.resultsSearch[0].carpoolings = this._carpoolingMapperService.modelsListToModelViewsList(carpoolings);
        });
    }
    
   getRetours() {
       if(!this.resultsSearch[1].carpoolings) {
            this._carpoolingService.getCarpoolingsList(
                this.trajetRetour,
                '18-12-2017',
                4, true, true
            ).subscribe(carpoolings => {
                this.resultsSearch[1].carpoolings = this._carpoolingMapperService
                    .modelsListToModelViewsListWithSelections(carpoolings, this.selections);
            });
        }
    }
    
    countSelections(isAller: boolean): number {
        return this._carpoolingService.countSelections(this.selections, isAller);
    }
 
}

