import { Carpooling } from "app/model/carpooling";

export class ResultSearchViewModel {
  constructor(
    public isAller,
    public title: string,
    public tabDays: string[],
    public tabTypes: string[],
    public carpoolings: Carpooling[]
  ) {}
}
