import { SimpleCarpooling } from 'app/model/simple.carpooling';
import { TrajetViewModel } from 'app/modelview/trajet.view.model';
import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';

export class SimpleCarpoolingViewModel {
    checked : boolean;

    id : number;
    price : string;
    nbPlacesRestantes : number;
    dateDepart : string;
    heureDepart : string;
    trajet : TrajetViewModel;
    reservations : number;
    acceptationAuto : boolean;
    linkedEvent: string;
    
    constructor(public carpooling: SimpleCarpooling) {
        this.id = this.carpooling.id;
        this.price = this.carpooling.price;
        this.nbPlacesRestantes = this.carpooling.nbPlacesRestantes;
        this.dateDepart = this.carpooling.dateDepart;
        this.heureDepart = this.carpooling.heureDepart;
        this.trajet = new TrajetViewModel(this.carpooling.trajet);
        this.reservations = this.carpooling.reservations;
        this.acceptationAuto = this.carpooling.acceptationAuto;
        this.linkedEvent = this.carpooling.linkedEvent;
    }
    
    
}