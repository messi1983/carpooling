import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

export class CarpoolingEvent {
    constructor(public carpooling: CarpoolingViewModel, public isAller: boolean) {}
}