import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carpooling-search',
  templateUrl: './carpooling-search.component.html',
  styleUrls: ['./carpooling-search.component.css']
})
export class CarpoolingSearchComponent implements OnInit {
   allerSimple: boolean = false;
   allerRetour: boolean = true;
    
   villeDepart = 'Oyem';
   villeDestination = 'Libreville';
    
   trajets = [{trajet: 'Aller'}, {trajet: 'Retour'}];
    
   minDate: Date;
   maxDate: Date;

  constructor() {
      this.minDate = new Date();
      this.maxDate = new Date();
      this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit() {
  }

}
