import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approv-dialog',
  templateUrl: './approv-dialog.component.html',
  styleUrls: ['./approv-dialog.component.css']
})
export class ApprovDialogComponent implements OnInit {
    years = ['', '1999', '2000', '2001'];
    months = ['', '01', '02', '03'];
    
    constructor() { }

    ngOnInit() {
    }

}
