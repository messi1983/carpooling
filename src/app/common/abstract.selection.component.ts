import { Input } from '@angular/core';

import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';
import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

import { CarpoolingUtils } from 'app/utils/carpooling.utils';

export abstract class AbstractSelectionComponent {
    @Input() selections: CarpoolingViewModel[];
    
     getSelectionsAller(): CarpoolingViewModel[] {
        return CarpoolingUtils.filterSelectionsAller(this.selections);
    }
    
    getSelectionsRetour(): CarpoolingViewModel[] {
        return CarpoolingUtils.filterSelectionsRetour(this.selections);
    }

}
