import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/catch";

import { Carpooler } from "app/model/carpooler";

@Injectable()
export class CarpoolerService {
  private _url = "assets/carpoolers.json";

  constructor(private _http: Http) {}

  getCarpoolersList(idDriver: string, filters: any): Observable<Carpooler[]> {
    return this._http
      .get(this._url)
      .map((response: Response) => <Carpooler[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
  }
}
