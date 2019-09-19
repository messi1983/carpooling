import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'approv-compte',
  templateUrl: './alimentation-compte.component.html',
  styleUrls: ['./alimentation-compte.component.css']
})
export class AlimentationCompteComponent implements OnInit {
    years = ['', '1999', '2000', '2001'];
    months = ['', '01', '02', '03'];
    
    constructor() { }

    ngOnInit() {
    }

}
