import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import "rxjs/add/operator/map";

@Injectable()
export class CarpoolingChartService {

  constructor(private _http: Http) {}

  dailyForecast() {
    return this._http
      .get("assets/chartData.json")
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error);
  }
}
