import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { Carpooling } from 'app/model/carpooling';
import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

@Injectable()
export class CarpoolingMapperService {
    
    constructor(){}
    
    modelsListToModelViewsList(modelsList: Carpooling[]): CarpoolingViewModel[]
    {
        return modelsList
            .map((carpooling: Carpooling) => new CarpoolingViewModel(carpooling, true));
    }
    
     modelsListToModelViewsListWithSelections(modelsList: Carpooling[], selections: CarpoolingViewModel[]): CarpoolingViewModel[]
    {
        let mapRetours = this.getMapRetours(selections);
        return modelsList
            .map((carpooling: Carpooling) => {
                if(mapRetours.has(carpooling.aller.id)) {
                    return mapRetours.get(carpooling.aller.id);
                }
            return new CarpoolingViewModel(carpooling, false);
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