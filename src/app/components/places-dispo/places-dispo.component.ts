import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'places-dispo',
  templateUrl: './places-dispo.component.html',
  styleUrls: ['./places-dispo.component.css']
})
export class PlacesDispoComponent implements OnInit {
    @Input() nbPlacesRestantes: number = 0;
    
    constructor() { }

    ngOnInit() {
    }

}
