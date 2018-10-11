import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

import { Trajet } from 'app/model/trajet';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { ResultSearchViewModel } from 'app/modelview/result.search.view.model';

import { CarpoolingService } from 'app/service/carpooling.service';
import { CarpoolingViewModelService } from 'app/service/carpooling.view.model.service';
import { CarpoolingUtils } from 'app/utils/carpooling.utils';

@Component({
  selector: 'carpoolings-list',
  templateUrl: './carpoolings-list.component.html',
  styleUrls: ['./carpoolings-list.component.css'],
  providers: [CarpoolingService, CarpoolingViewModelService]
})
export class CarpoolingsListComponent implements OnInit {
    tabsCarpoolings : string[] = [ 'DISPONIBLES (110)', 'COMPLETS (0)' ];
    tabsDays : string[] = [ "Aujourd'hui", "Demain" ];
    
    selections: CarpoolingViewModel[] = [];
    carpoolingsAller: CarpoolingViewModel[] = [];
    carpoolingsRetour: CarpoolingViewModel[] = [];
    currentStep: number = 1;
    
    trajetAller : Trajet = new Trajet('Bordeaux', 'Toulouse', null, null);
    trajetRetour : Trajet = new Trajet('Toulouse', 'Bordeaux', null, null);
    
    resultsSearch: ResultSearchViewModel[] = [
         new ResultSearchViewModel(
            'Vos covs Aller',
            this.tabsDays,
            this.tabsCarpoolings,
            this.selections,
            this.carpoolingsAller
        ),
        new ResultSearchViewModel(
            'Vos covs Retour',
            this.tabsDays,
            this.tabsCarpoolings,
            this.selections,
            this.carpoolingsRetour
        )
    ];
    
    constructor(
        private _carpoolingService: CarpoolingService, 
        private _carpoolingViewModelService: CarpoolingViewModelService
    ) { }

    ngOnInit() {
        this._carpoolingService.getCarpoolingsList(
            this.trajetAller,
            '18-12-2017',
            4, true, true
        ).subscribe(carpoolings => {
            this.carpoolingsAller.push.apply(this.carpoolingsAller, this._carpoolingViewModelService.creerListeCarpoolingsAller(carpoolings));
        });
    }
    
    goToStepAllers(): void {
        this.currentStep = 1;
    }
    
     goToStepVisualisationSelections(): void {
        this.currentStep = 3;
    }
    
    goToStepPaiement(): void {
        this.currentStep = 4;
    }
    
   goToStepRetours() {
       this.currentStep = 2;
       if(this.carpoolingsRetour.length === 0) {
            this._carpoolingService.getCarpoolingsList(
                this.trajetRetour,
                '18-12-2017',
                4, true, true
            ).subscribe(carpoolings => {
                this.carpoolingsRetour.push.apply(this.carpoolingsRetour, this._carpoolingViewModelService
                    .creerListeCarpoolingsRetour(carpoolings, this.carpoolingsAller));
            });
        }
    }
    
    countSelections(isAller: boolean): number {
        return CarpoolingUtils.countSelections(this.selections, isAller);
    }
 
}

