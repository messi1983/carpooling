export interface ICarpooling {
    id : number;
    checked : boolean;
    driver : {
            compteId : string;
            lastname : string;
            firstname : string;
            sexe : string;
            telephone : string;
            age : number;
            note : string;
        },
        price : string;
        nbPlacesRestantes : number;
        dateDepart : string;
        heureDepart : string;
        dateRetour : string,
        heureRetour : string;
        trajet : {
            villeDepart : string;
            villeArrivee : string;
            pointDepart : string;
            pointArrivee : string;
        },
        allerRetour : boolean;
        reservations : number,
        acceptationAuto : boolean,
        linkedEvent: string
}