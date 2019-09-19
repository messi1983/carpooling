import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Proposition } from "app/model/proposition";

@Injectable()
export class PropositionService {
  constructor(private _http: Http) {}

  findUserPropositions(
    idDriver: string,
    status: string
  ): Observable<Proposition[]> {
    return this._http
      .get(`assets/propositions${status}.json`)
      .map((response: Response) => <Proposition[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
  }
}
