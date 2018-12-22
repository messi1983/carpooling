import { Component, OnInit, ViewChild } from '@angular/core';
import { CarpoolingFormComponent } from '../../components-shared/carpooling-form/carpooling-form.component'

@Component({
  selector: 'carpooling-search',
  templateUrl: './carpooling-search.component.html',
  styleUrls: ['./carpooling-search.component.css']
})
export class CarpoolingSearchComponent implements OnInit {

    @ViewChild(CarpoolingFormComponent) 
    private form : CarpoolingFormComponent;
    
    ngOnInit() {
    }

}
