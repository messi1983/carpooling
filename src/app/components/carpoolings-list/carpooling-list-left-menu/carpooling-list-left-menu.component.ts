import { Component, Input, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio'
import { ENTER, COMMA} from '@angular/cdk/keycodes';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { CarpoolingService } from 'app/service/carpooling.service';
import { CarpoolingUtils } from 'app/utils/carpooling.utils';
import { SortEnum } from 'app/enums/sort.enum';

import { AbstractSelectionComponent } from 'app/components-shared/abstract.selection.component';

@Component({
  selector: 'carpooling-list-left-menu',
  templateUrl: './carpooling-list-left-menu.component.html',
  styleUrls: ['./carpooling-list-left-menu.component.css']
})
export class CarpoolingListLeftMenuComponent extends AbstractSelectionComponent {
    @Input() selections: CarpoolingViewModel[];
    @Input() carpoolingsAller: CarpoolingViewModel[] = [];
    @Input() carpoolingsRetour: CarpoolingViewModel[] = [];
    @Input() currentStep: number;
    
    selectionsAller: CarpoolingViewModel[];
    selectionsRetour: CarpoolingViewModel[];
    
    visible: boolean = true;
    selectable: boolean = true;
    addOnBlur: boolean = true;
    
    rangeOption:any = { minValue : 0, maxValue : 0 };
        
    selectedOption: SortEnum[] = [SortEnum.Departure_hour_asc, SortEnum.Departure_hour_asc];
    
    listeTriSurHeureDepartOptions = [
        {"name": "H. départ croissant", value: SortEnum.Departure_hour_asc},
        {"name": "H. départ décroissant", value: SortEnum.Departure_hour_desc},
    ];
    
    listeTriSurPrixOptions = [
        {"name": "Prix pl. croissant", value: SortEnum.Price_asc},
        {"name": "Prix pl. décroissant", value: SortEnum.Price_desc},
    ];
    
    listeTriSurNbPlacesOptions = [
        {"name": "Nb pl. croissant", value: SortEnum.Nb_places_asc},
        {"name": "Nb pl. décroissant", value: SortEnum.Nb_places_desc}
    ];
    
    allerRetour: boolean = false

    minHour = [0, 0];
    maxHour = [23, 23];
    stepHour = [1, 1];
    stepRangeHour = [[0,23], [0,23]];
    
    minNbPlace = [1, 1];
    maxNbPlace = [10, 10];
    stepNbPlace = [1, 1];
    stepRangeNbPlace = [[1, 10], [1, 10]];
    
    minPrice = [1, 1];
    maxPrice = [100, 100];
    stepPrice = [1, 1];
    stepRangePrice = [[1, 100], [1, 100]];
                        
    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];
    
    constructor() {
        super();
    }
    
    rangeChange(event: any) {
        console.log('range=');
        console.log(this.rangeOption);  
    }
    
     radioChange(event: MatRadioChange) {
        switch(event.value) {
            case SortEnum.Departure_hour_asc: {
                this.sortByHourDepartureAsc();
                break;
             }
             case SortEnum.Departure_hour_desc: {
                this.sortByHourDepartureDesc();
                break;
             }
             case SortEnum.Price_asc: {
                this.sortByPricePlaceAsc();
                break;
             }
             case SortEnum.Price_desc: {
                this.sortByPricePlaceDesc();
                break;
             }
             case SortEnum.Nb_places_desc: {
                this.sortByNbPlaceDesc();
                break;
             }
             default: {
                this.sortByNbPlaceAsc();
                break;
             }
        }
    }
    
    removeChip(carpooling: CarpoolingViewModel, isAller: boolean): void {
        carpooling.getSimpleCarpooling(isAller).checked = false;
        CarpoolingUtils.removeFromList(carpooling, this.selections, isAller);
     }
    
    existSelectionsAller() : boolean {
        this.selectionsAller = this.getSelectionsAller();
        return this.selectionsAller.length !== 0;
    }
    
    existSelectionsRetour() : boolean {
        this.selectionsRetour = this.getSelectionsRetour();
        return this.selectionsRetour.length !== 0;
    }
    
    private sortByHourDepartureDesc(): void {
        let isAller = this.currentStep == 1;
        this.getCarpoolingsList(isAller).sort((cp1, cp2) => {
            return this.sortDesc(cp1.getSimpleCarpooling(isAller).heureDepart, cp2.getSimpleCarpooling(isAller).heureDepart);
        });
    }
    
    private sortByHourDepartureAsc(): void {
        let isAller = this.currentStep == 1;
        this.getCarpoolingsList(isAller).sort((cp1, cp2) => {
            return this.sortAsc(cp1.getSimpleCarpooling(isAller).heureDepart, cp2.getSimpleCarpooling(isAller).heureDepart);
        });
    }
    
    private sortByNbPlaceDesc(): void {
       let isAller = this.currentStep == 1;
        this.getCarpoolingsList(isAller).sort((cp1, cp2) => {
            return this.sortDesc(cp1.getSimpleCarpooling(isAller).nbPlacesRestantes, cp2.getSimpleCarpooling(isAller).nbPlacesRestantes);
        });
    }
    
    private sortByNbPlaceAsc(): void {
        let isAller = this.currentStep == 1;
        this.getCarpoolingsList(isAller).sort((cp1, cp2) => {
            return this.sortAsc(cp1.getSimpleCarpooling(isAller).nbPlacesRestantes, cp2.getSimpleCarpooling(isAller).nbPlacesRestantes);
        });
    }
    
    private sortByPricePlaceDesc(): void {
        let isAller = this.currentStep == 1;
        this.getCarpoolingsList(isAller).sort((cp1, cp2) => {
            return this.sortDesc(cp1.getSimpleCarpooling(isAller).price, cp2.getSimpleCarpooling(isAller).price);
        });
    }
    
    private sortByPricePlaceAsc(): void {
        let isAller = this.currentStep == 1;
        this.getCarpoolingsList(isAller).sort((cp1, cp2) => {
            return this.sortAsc(cp1.getSimpleCarpooling(isAller).price, cp2.getSimpleCarpooling(isAller).price);
        });
    }
    
    private getCarpoolingsList(isAller: boolean): CarpoolingViewModel[] {
        if(isAller) {
            return this.carpoolingsAller;
        }
        return this.carpoolingsRetour;
    }
    
    private sortAsc(val1: any, val2: any): number {
        if (val1 > val2) {
            return 1;
        }
        if (val1 < val2) {
            return -1;
        }
        return 0;
    }
    
    private sortDesc(val1: any, val2: any): number {
        return -1 * this.sortAsc(val1, val2);;
    }
    
}
