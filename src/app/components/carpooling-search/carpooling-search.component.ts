import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carpooling-search',
  templateUrl: './carpooling-search.component.html',
  styleUrls: ['./carpooling-search.component.css']
})
export class CarpoolingSearchComponent implements OnInit {
    
    villeDepart = 'Oyem';
    villeDestination = 'Libreville';
    
    listCovsOptions = [
        {"name": "Aller simple", "checked": false, value: "1"},
        {"name": "Aller retour", "checked": false, value: "2"}
    ]
    
    selectedOption: string = "1";
    
    trajets = [{trajet: 'Aller'}];
    
    minDate: Date;
    maxDate: Date;
    
    radioChange(event: any) {
        if(event.value === "2") {
           this. trajets = [{trajet: 'Aller'}, {trajet: 'Retour'}];
        } else {
             this. trajets = [{trajet: 'Aller'}];
        }
    }

    ngOnInit() {
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate() + 7);
    }

}
