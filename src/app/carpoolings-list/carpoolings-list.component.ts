import { Component, TemplateRef, OnInit } from '@angular/core';
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
    
    onSelect(carpooling: any): void {
      this.selectedCarpooling = carpooling;
    }
    
    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
        this.carpoolingsObservable = this.getCarpoolings('/18-12-2017');
    }
    
}
