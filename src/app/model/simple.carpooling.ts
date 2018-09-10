import { Trajet } from 'app/model/trajet';

export class SimpleCarpooling {
    constructor(
        public id : number,
        public price : string,
        public trajet : Trajet,
        public nbPlacesRestantes : number,
        public dateDepart : string,
        public heureDepart : string,
        public reservations : number,
        public acceptationAuto : boolean,
        public linkedEvent: string
    ) {}
}