import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carpooling-form',
  templateUrl: './carpooling-form.component.html',
  styleUrls: ['./carpooling-form.component.css']
})
export class CarpoolingFormComponent {
    @Input() editMode : boolean = false;
    
    accAutoAller: boolean = false;
    accAutoRetour: boolean = true;
    
    villeDepart = 'Oyem';
    villeDestination = 'Libreville';
    
    allerSimple: boolean = true;
    allerRetour: boolean = false;
    
    selectedCovType: string = "as";
    
    constructor() {
      
    }
}
