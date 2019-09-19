import { Trajet } from "app/model/trajet";
import { Carpooler } from "app/model/carpooler";
import { Carpooling } from "app/model/carpooling";

export class CarpoolingViewModel {
  checked: boolean;

  id: number;
  price: string;
  nbPlacesRestantes: number;
  dateDepart: string;
  heureDepart: string;
  trajet: Trajet;
  driver: Carpooler;
  reservations: number;
  acceptationAuto: boolean;
  linkedEvent: string;
  dateTimeRetour: string;
  dateTimeAller: string;

  constructor(private carpooling: Carpooling) {
    this.id = this.carpooling.id;
    this.price = this.carpooling.price;
    this.nbPlacesRestantes = this.carpooling.nbPlacesRestantes;
    this.dateDepart = this.carpooling.dateDepart;
    this.heureDepart = this.carpooling.heureDepart;
    // this.trajet = new TrajetViewModel(this.carpooling.trajet);
    this.trajet = this.carpooling.trajet;
    this.driver = this.carpooling.driver;
    this.reservations = this.carpooling.reservations;
    this.acceptationAuto = this.carpooling.acceptationAuto;
    this.linkedEvent = this.carpooling.linkedEvent;
    this.dateTimeAller = this.carpooling.dateTimeAller;
    this.dateTimeRetour = this.carpooling.dateTimeRetour;
  }
}
