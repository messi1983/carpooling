import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
      selector: 'app-paginator',
      templateUrl: './app-paginator.component.html',
      styleUrls: ['./app-paginator.component.css'],
      encapsulation: ViewEncapsulation.None
})
export class AppPaginatorComponent implements OnInit {
    totalItems: number = 64;
    currentPage: number = 4;
    smallnumPages: number = 0;
    
    constructor() { }

    ngOnInit() {
    }
    
    pageChanged(event: any): void {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    }

}
