import { Carpooler } from "app/model/carpooler";
import { DemandeOffre } from "app/model/demande-offre";

export class Proposition {
  constructor(
    public id: string,
    public offres: DemandeOffre[],
    public beneficers: Carpooler[]
  ) {}
}
