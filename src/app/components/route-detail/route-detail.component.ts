import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {
    @Input() trajet : any;
    @Input() restrictDesc: boolean = false;
    
    constructor() { }

     ngOnInit() {
     }

}
