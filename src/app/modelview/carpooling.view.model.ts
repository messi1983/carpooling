import { Carpooling } from 'app/model/carpooling';
import { CarpoolerViewModel } from 'app/modelview/carpooler.view.model';
import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';

export class CarpoolingViewModel {
    driver : CarpoolerViewModel;
    aller: SimpleCarpoolingViewModel;
    retour: SimpleCarpoolingViewModel;
    
    constructor(public carpooling: Carpooling, isAller: boolean) {
        this.driver = new CarpoolerViewModel(this.carpooling.driver);
        
        if(isAller) {
            this.aller = new SimpleCarpoolingViewModel(this.carpooling.aller);
            if (this.carpooling.retour) {
                this.retour = new SimpleCarpoolingViewModel(this.carpooling.retour);
            }
        } else {
             this.retour = new SimpleCarpoolingViewModel(this.carpooling.aller);
        }
    }
    
    getSimpleCarpooling(isAller: boolean): SimpleCarpoolingViewModel {
        return isAller ? this.aller : this.retour;
    }
    
    isAllerRetourDeselected(): boolean {
        let isAllerDeselected = !this.aller || (this.aller && !this.aller.checked);
        let isRetourDeselected = !this.retour || (this.retour && !this.retour.checked);
        return isAllerDeselected && isRetourDeselected;
    }
    
}