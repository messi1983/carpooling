import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Carpooling } from 'app/model/carpooling';
import { CarpoolerViewModel } from 'app/modelview/carpooler.view.model';
import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';

@Injectable()
export class CarpoolingViewModelService {
    
    constructor(){}
    
    public creerCapoolingViewModel(carpooling: Carpooling, isAller: boolean): CarpoolingViewModel {
        let carpoolingViewModel = new CarpoolingViewModel();
        
        carpoolingViewModel.carpooling = carpooling;
        carpoolingViewModel.driver = new CarpoolerViewModel(carpooling.driver);
        
        if(isAller) {
             carpoolingViewModel.aller = new SimpleCarpoolingViewModel(carpooling.aller);
            if (carpooling.retour) {
                carpoolingViewModel.retour = new SimpleCarpoolingViewModel(carpooling.retour);
            }
        } else {
             carpoolingViewModel.retour = new SimpleCarpoolingViewModel(carpooling.aller);
        }
        return carpoolingViewModel;
    }
    
     public creerListeCarpoolingsAller(modelsList: Carpooling[]): CarpoolingViewModel[] {
        return modelsList
            .map((carpooling: Carpooling) => this.creerCapoolingViewModel(carpooling, true));
    }
    
    public creerListeCarpoolingsRetour(modelsList: Carpooling[], carpoolings: CarpoolingViewModel[]): CarpoolingViewModel[] {
        let mapRetours = this.getMapRetours(carpoolings);
        return modelsList
            .map((carpooling: Carpooling) => {
                if(mapRetours.has(carpooling.aller.id)) {
                    return mapRetours.get(carpooling.aller.id);
                }
            return this.creerCapoolingViewModel(carpooling, false);
        });
    }
    
    private getMapRetours(carpoolings: CarpoolingViewModel[]): Map<number, CarpoolingViewModel> {
        let mapRetours = new Map();
        for (let cp of carpoolings) {
            if(cp.retour) {
                mapRetours.set(cp.retour.id, cp);
            }
        }
        return mapRetours;
    }
    
}