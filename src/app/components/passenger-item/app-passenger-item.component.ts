import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'passenger-item',
  templateUrl: './passenger-item.component.html',
  styleUrls: ['./passenger-item.component.css']
})
export class AppPassengerItemComponent implements OnInit {
    @Input() carpooler : any;
    
    constructor() { }

    ngOnInit() {
    }

}
