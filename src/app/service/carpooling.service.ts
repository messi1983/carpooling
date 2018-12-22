import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/catch";

import { Carpooling } from "app/model/carpooling";

@Injectable()
export class CarpoolingService {
  private _allerUrl = "assets/carpoolingsA.json";
  private _retourUrl = "assets/carpoolingsR.json";

  // TODO : A supprimer
  private full: boolean = true;

  constructor(private _http: Http) {}

  getCarpoolingsList(
    trajet,
    date,
    nbPlaces: number,
    isAllerRetour: boolean,
    isAcceptationAuto: boolean
  ): Observable<Carpooling[]> {
    let url = this._allerUrl;
    if (trajet.villeDepart === "Toulouse") {
      url = this._retourUrl;
    }
    return this._http
      .get(url)
      .map((response: Response) => <Carpooling[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
  }
}
