import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-in-line',
  templateUrl: './route-in-line.component.html',
  styleUrls: ['./route-in-line.component.css']
})
export class RouteInLineComponent implements OnInit {
    @Input() trajet : any;
    @Input() isDetail : boolean;
    @Input() allerRetour : boolean;
    
    constructor() { }

    ngOnInit() {
    }

}
