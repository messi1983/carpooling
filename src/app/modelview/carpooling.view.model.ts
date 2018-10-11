import { Carpooling } from 'app/model/carpooling';
import { CarpoolerViewModel } from 'app/modelview/carpooler.view.model';
import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';

export class CarpoolingViewModel {
    carpooling: Carpooling;
    driver : CarpoolerViewModel;
    aller: SimpleCarpoolingViewModel;
    retour: SimpleCarpoolingViewModel;
    
    getSimpleCarpooling(isAller: boolean): SimpleCarpoolingViewModel {
        return isAller ? this.aller : this.retour;
    }
    
    isAllerRetourDeselected(): boolean {
        let isAllerDeselected = !this.aller || (this.aller && !this.aller.checked);
        let isRetourDeselected = !this.retour || (this.retour && !this.retour.checked);
        return isAllerDeselected && isRetourDeselected;
    }
    
}