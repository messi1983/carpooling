import { Component, Input, Output, EventEmitter, OnInit, trigger, state, style, transition, animate, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox'
import { animation } from './carpooling-card.animation'
import { MatDialog, MatCheckbox } from '@angular/material';


@Component({
  selector: 'carpooling-card',
  templateUrl: './carpooling-card.component.html',
  styleUrls: ['./carpooling-card.component.css'],
  animations: [ animation ]
})
export class CarpoolingCardComponent implements OnInit {
    @Input() carpooling : any;
    @Input() disabled: boolean;
    
    @Output() showDetail = new EventEmitter<any>();
    @Output() notifySelection = new EventEmitter<any>();
    
    selected: boolean = false;
    flip: string = 'inactive';
    template1 : string = "#frontTemplate";
    
    constructor(public _dialog: MatDialog) { }

    ngOnInit() {
    }
    
    onShowDetail(): void {
        this.showDetail.emit(this.carpooling);  
    }
    
    onNotifySelection(event:MatCheckboxChange): void {
        if(event.checked) {
            if(this.carpooling.acceptationAuto) {
                this.openDialog();
            } else {
                this.notifySelection.emit({check: true, carpooling:this.carpooling});
            }
        } else {
            this.notifySelection.emit({check: false, carpooling:this.carpooling});
        }
    }
    
    openDialog() {
        const dialogRef = this._dialog.open(AutoAcceptanceCarpoolingDialog, {
            width: '500px',
        });

        dialogRef.afterClosed().subscribe(response => {
            if(response) {
                this.notifySelection.emit({check: true, carpooling:this.carpooling});
            } else {
                this.carpooling.checked = false;
            }
            console.log(`Dialog result: ${response}`);
        });
    }
    
    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
    
}

@Component({
  selector: 'auto-acceptance-cp-dialog',
  templateUrl: './auto-acceptance-cp-dialog.component.html',
})
export class AutoAcceptanceCarpoolingDialog {
    constructor() { }
}
