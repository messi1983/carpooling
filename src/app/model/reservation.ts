import { Carpooler } from "app/model/carpooler";
import { DemandeOffre } from "app/model/demande-offre";

export class Reservation {
  constructor(
    public id: string,
    public demandes: DemandeOffre[],
    public owner: Carpooler
  ) {}
}
