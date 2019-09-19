import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cov-infos-barre',
  templateUrl: './cov-infos-barre.component.html',
  styleUrls: ['./cov-infos-barre.component.css']
})
export class CovInfosBarreComponent implements OnInit {
    @Input() linkedEvent: string;
  
    constructor() { }

    ngOnInit() {
    }

}
