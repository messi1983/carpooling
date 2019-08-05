export class Car {
    constructor(
        public marque: string,
        public modele: string,
        public annee: Date,
        public matricule: string,
        public nbPlacesDispo: number,
        public isVehPrincipal: boolean,
        public color: string
    ) {}
}