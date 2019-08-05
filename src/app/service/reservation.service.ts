import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Reservation } from "app/model/reservation";

@Injectable()
export class ReservationService {

  constructor(private _http: Http) {}

  findUserReservations(idDriver: string,  status: string): Observable<Reservation[]> {
    return this._http
      .get(`assets/reservations${status}.json`)
      .map((response: Response) => <Reservation[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
  }
}
