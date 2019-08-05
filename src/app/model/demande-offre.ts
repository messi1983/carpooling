import { Carpooling } from "app/model/carpooling";

export class DemandeOffre {
  constructor(
    public carpooling: Carpooling,
    public nbPlaces: number,
    public satut: string
  ) {}
}
