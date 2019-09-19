import { Carpooler } from "app/model/carpooler";
import { Trajet } from "app/model/trajet";

export class Carpooling {
  constructor(
    public id: number,
    public trajet: Trajet,
    public driver: Carpooler,
    public price: string,
    public nbPlacesRestantes: number,
    public dateDepart: string,
    public heureDepart: string,
    public reservations: number,
    public acceptationAuto: boolean,
    public linkedEvent: string,
    public dateTimeRetour: string,
    public dateTimeAller: string
  ) {}
}
