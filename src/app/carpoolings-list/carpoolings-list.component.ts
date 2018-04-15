import { Component, TemplateRef, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'carpoolings-list',
  templateUrl: './carpoolings-list.component.html',
  styleUrls: ['./carpoolings-list.component.css']
})
export class CarpoolingsListComponent implements OnInit {
        
    carpoolingsObservable : Observable<any[]>;
    tabsCarpoolings : string[] = [ 'DISPONIBLES (110)', 'COMPLETS (0)' ];
    tabsDays : string[] = [ "Aujourd'hui", "Demain" ];
    
    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;

    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];

    covsAller = [
         { trajet: 'Bx -> Tlse', heure: '18h30', prix: '12,00$'  },
         { trajet: 'Lyon -> Tlse', heure: '17h30', prix: '12,00$'  },
         { trajet: 'Bx -> Tlse', heure: '18h30', prix: '12,00$'  }
    ];
    
     covsRetour = [
         { trajet: 'Bx -> Tlse', heure: '18h30', prix: '12,00$'  },
         { trajet: 'Lyon -> Tlse', heure: '17h30', prix: '12,00$'  },
         { trajet: 'Bx -> Tlse', heure: '18h30', prix: '12,00$'  }
    ];

    
    // TODO : A supprimer
    full : boolean = true;
    
    currentPage = 4;
    totalItems : number = 5;
    itemsPerPage : number = 2;
    selectedCarpooling: any;
    
    bsModalRef : BsModalRef;
    config = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
    };
    
//    constructor(private db: AngularFireDatabase, private modalService: BsModalService) { }
    constructor(private db: AngularFireDatabase) { }

    ngOnInit() {
        this.carpoolingsObservable = this.getCarpoolings('/18-12-2017');
    }
    
    getCarpoolings(path): Observable<any[]> {
        if(! this.full) {
             this.full = true;
            return Observable.of([]);
        }
         this.full = false;
       return this.db.list(path).valueChanges();
    }
    
    openCarpoolingDetailModal(template: TemplateRef<any>) {
//        this.bsModalRef = this.modalService.show(template,  Object.assign({}, this.config, { class: 'gray modal-lg' }));
    }
    
    onSelect(selection: any): void {
        this.selectedCarpooling = selection.carpooling;
        
        if(selection.check) {
             this.covsAller.push({ 
                trajet: this.selectedCarpooling.trajet.villeDepart + ' -> ' +  this.selectedCarpooling.trajet.villeArrivee , 
                 heure: '12h00',
                 prix: this.selectedCarpooling.price + '$'
             });
          } else {
            console.log(selection);
                 this.remove({ 
                    trajet: this.selectedCarpooling.trajet.villeDepart + ' -> ' +  this.selectedCarpooling.trajet.villeArrivee , 
                     heure: '12h00',
                     prix: this.selectedCarpooling.price + '$'
                 });
          }
    }
    
    onShowDetailt(carpooling: any): void {
      this.selectedCarpooling = carpooling;
    }
    
    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.carpoolingsObservable = this.getCarpoolings('/18-12-2017');
    }

    remove(cov: any): void {
        let index = this.covsAller.indexOf(cov);
        
        console.log('Index = ' + index);

        if (index >= 0) {
         this.covsAller.splice(index, 1);
        }
     }
    
}
