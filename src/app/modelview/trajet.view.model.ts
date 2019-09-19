import { Trajet} from 'app/model/trajet';

export class TrajetViewModel {
    villeDepart : string;
    villeArrivee : string;
    pointDepart : string;
    pointArrivee : string;
    
    constructor(public trajet : Trajet) {
        this.villeDepart = trajet.villeDepart;
        this.villeArrivee = trajet.villeArrivee;
        this.pointDepart = trajet.pointDepart;
        this.pointArrivee = trajet.pointArrivee;
    }
}