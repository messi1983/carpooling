import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/catch";

import { Carpooling } from "app/model/carpooling";

@Injectable()
export class CarpoolingService {
  // TODO : A supprimer
  private full: boolean = true;

  constructor(private _http: Http) {}

  findUserNextTrips(id, type): Observable<Carpooling> {
    let url = `assets/nextTrips${id}.${type}.json`;

    return this._http
      .get(url)
      .map((response: Response) => <Carpooling>response.json())
      .catch(this.handleError);
  }

  findCarpooling(id, isAller): Observable<Carpooling> {
    let url = `assets/carpoolingA${id}.json`;
    if (isAller) {
      url = `assets/carpoolingR${id}.json`;
    }
    return this._http
      .get(url)
      .map((response: Response) => <Carpooling>response.json())
      .catch(this.handleError);
  }

  findCarpoolings(isAller: boolean): Observable<Carpooling[]> {
    let sens = "A";
    if (!isAller) {
      sens = "R";
    }
    return this._http
      .get(`assets/carpoolings${sens}.json`)
      .map((response: Response) => <Carpooling[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
  }
}
