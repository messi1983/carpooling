import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';

export class CarpoolingUtils {
    
    constructor(){}
    
    public static addToList(carpooling:CarpoolingViewModel, carpoolings:CarpoolingViewModel[]): void {
        let index = carpoolings.indexOf(carpooling);
        if (index < 0) {
            carpoolings.push(carpooling);
        }
     }
    
    public static existAcceptionAutoSurSelectionsAller(selections: CarpoolingViewModel[]): boolean {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.aller && cp.aller.checked && cp.aller.acceptationAuto).length !== 0;
    }
    
    public static existAcceptionAutoSurSelectionsRetour(selections: CarpoolingViewModel[]): boolean {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.retour && cp.retour.checked && cp.retour.acceptationAuto).length !== 0;
    }
    
    public static countSelections(selections: CarpoolingViewModel[], isAller: boolean): number {
        if(isAller) {
            return CarpoolingUtils.countSelectionsAller(selections);
        } 
        return CarpoolingUtils.countSelectionsRetour(selections);
    }
    
    public static filterSelectionsAller(selections: CarpoolingViewModel[]): CarpoolingViewModel[] {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.aller && cp.aller.checked);
    }
    
    public static countSelectionsAller(selections: CarpoolingViewModel[]): number {
        return CarpoolingUtils.filterSelectionsAller(selections).length;
    }
    
     public static filterSelectionsRetour(selections: CarpoolingViewModel[]): CarpoolingViewModel[] {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.retour && cp.retour.checked);
    }
    
    public static countSelectionsRetour(selections: CarpoolingViewModel[]): number {
        return CarpoolingUtils.filterSelectionsRetour(selections).length;
    }
    
     public static removeFromList(carpooling:CarpoolingViewModel, carpoolings:CarpoolingViewModel[], isAller: boolean): void {
        if(carpooling.isAllerRetourDeselected()) {
            let index = carpoolings.indexOf(carpooling);
            if (index >= 0) {
                carpoolings.splice(index, 1);
            }
        } else if (isAller && carpooling.aller) {
            carpooling.aller.checked = false;
        } else if (!isAller && carpooling.retour) {
            carpooling.retour.checked = false;
        }
     }
    
    public static cleanList(carpoolings:CarpoolingViewModel[], isAller: boolean): void {
        let length = carpoolings.length;
        let index = 0;
        while(index < length) { 
           CarpoolingUtils.removeFromList(carpoolings[index], carpoolings, isAller);
            if(carpoolings.length === length) {
                index++;
            } else {
                length = carpoolings.length;
            }
        } 
     }
    
}