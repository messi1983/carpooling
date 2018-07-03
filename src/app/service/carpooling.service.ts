import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ICarpooling } from 'app/model/carpooling';

@Injectable()
export class CarpoolingService {
    private _carpoolingurl='assets/carpoolings.json';
    
    // TODO : A supprimer
    private full : boolean = true;
    
    constructor(private _http: Http, private db: AngularFireDatabase){}
    
    getSelectedCarpoolings(): Observable<ICarpooling[]>
    {
        return this._http.get(this._carpoolingurl)
            .map((response: Response) => <ICarpooling[]> response.json())
            .do(data => console.log(JSON.stringify(data)));
    }
    
    getCarpoolings(path): Observable<any[]> {
        if(! this.full) {
             this.full = true;
            return Observable.of([]);
        }
         this.full = false;
       return this.db.list(path).valueChanges();
    }
    
     removeFromList(cov: any, listCovs:any[]): void {
        cov.checked = false;
        let index = listCovs.indexOf(cov);
        if (index >= 0) {
            listCovs.splice(index, 1);
        }
     }
    
    cleanList(listCovs:any[]): void {
        while(listCovs.length > 0) { 
           this.removeFromList(listCovs[0], listCovs);
        } 
     }
}