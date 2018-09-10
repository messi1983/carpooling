import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

import { Carpooling } from 'app/model/carpooling';
import { CarpoolingViewModel } from 'app/modelview/carpooling.view.model';
import { SimpleCarpoolingViewModel } from 'app/modelview/simple.carpooling.view.model';

@Injectable()
export class CarpoolingService {
    private _allerUrl='assets/carpoolingsA.json';
    private _retourUrl='assets/carpoolingsR.json';
    
    // TODO : A supprimer
    private full : boolean = true;
    
    constructor(private _http: Http, private db: AngularFireDatabase){}
    
    existAcceptionAutoSurSelectionsAller(selections: CarpoolingViewModel[]): boolean {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.aller && cp.aller.checked && cp.aller.acceptationAuto).length !== 0;
    }
    
    existAcceptionAutoSurSelectionsRetour(selections: CarpoolingViewModel[]): boolean {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.retour && cp.retour.checked && cp.retour.acceptationAuto).length !== 0;
    }
    
    countSelections(selections: CarpoolingViewModel[], isAller: boolean): number {
        if(isAller) {
            return this.countSelectionsAller(selections);
        } 
        return this.countSelectionsRetour(selections);
    }
    
    filterSelectionsAller(selections: CarpoolingViewModel[]): CarpoolingViewModel[] {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.aller && cp.aller.checked);
    }
    
    countSelectionsAller(selections: CarpoolingViewModel[]): number {
        return this.filterSelectionsAller(selections).length;
    }
    
     filterSelectionsRetour(selections: CarpoolingViewModel[]): CarpoolingViewModel[] {
        return selections
            .filter((cp: CarpoolingViewModel) => cp.retour && cp.retour.checked);
    }
    
    countSelectionsRetour(selections: CarpoolingViewModel[]): number {
        return this.filterSelectionsRetour(selections).length;
    }
    
    getCarpoolingsList(trajet, date, nbPlaces, isAllerRetour, isAcceptationAuto): Observable<Carpooling[]> {
        let url = this._allerUrl;
        if(trajet.villeDepart === 'Toulouse') {
            url = this._retourUrl;
        }
        return this._http.get(url)
            .map((response: Response) => <Carpooling[]> response.json())
            .catch(this.handleError);
    }
    
    removeFromList(carpooling:CarpoolingViewModel, carpoolings:CarpoolingViewModel[], isAller: boolean): void {
        if(carpooling.isAllerRetourDeselected()) {
            let index = carpoolings.indexOf(carpooling);
            if (index >= 0) {
                carpoolings.splice(index, 1);
            }
        } else if (isAller && carpooling.aller) {
            carpooling.aller.checked = false;
        } else if (!isAller && carpooling.retour) {
            carpooling.retour.checked = false;
        }
     }
    
    addToList(carpooling:CarpoolingViewModel, carpoolings:CarpoolingViewModel[]): void {
        let index = carpoolings.indexOf(carpooling);
        if (index < 0) {
            carpoolings.push(carpooling);
        }
     }
    
    cleanList(carpoolings:CarpoolingViewModel[], isAller: boolean): void {
        let length = carpoolings.length;
        let index = 0;
        while(index < length) { 
           this.removeFromList(carpoolings[index], carpoolings, isAller);
            if(carpoolings.length === length) {
                index++;
            } else {
                length = carpoolings.length;
            }
        } 
     }
    
    existReturns(carpoolings: CarpoolingViewModel[]) {
        let result = carpoolings
            .filter((cp: CarpoolingViewModel) => cp.retour && cp.retour.checked);
        return result.length !== 0;
    }
    
    existAllers(carpoolings: CarpoolingViewModel[]) {
        let result = carpoolings
            .filter((cp: CarpoolingViewModel) => cp.aller && cp.aller.checked);
        return result.length !== 0;
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error());
    }
}