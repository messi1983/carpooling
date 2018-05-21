import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {
    @Input() driver : any;
  
    constructor() { }

      ngOnInit() {
      }

}
