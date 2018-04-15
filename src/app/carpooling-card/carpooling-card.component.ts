import { Component, Input, Output, EventEmitter, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox'
import { animation } from './carpooling-card.animation'


@Component({
  selector: 'carpooling-card',
  templateUrl: './carpooling-card.component.html',
  styleUrls: ['./carpooling-card.component.css'],
  animations: [ animation ]
})
export class CarpoolingCardComponent implements OnInit {

    @Input() carpooling : any;
    @Output() showDetail = new EventEmitter<any>();
    @Output() notifySelection = new EventEmitter<any>();
    flip: string = 'inactive';
    template1 : string = "#frontTemplate";
    
    constructor() { }

    ngOnInit() {
    }
    
    onShowDetail(): void {
        this.showDetail.emit(this.carpooling);  
    }
    
    onNotifySelection(event:MatCheckboxChange): void {
        if(event.checked) {
            this.notifySelection.emit({check: true, carpooling:this.carpooling});
        } else {
            this.notifySelection.emit({check: false, carpooling:this.carpooling});
        }
    }
    
    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
    
}
