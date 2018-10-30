import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'carpooling-create',
  templateUrl: './carpooling-create.component.html',
  styleUrls: ['./carpooling-create.component.css']
})
export class CarpoolingCreateComponent implements OnInit {

    currentStep: number = 1;
    
    constructor() { }

    ngOnInit() {
    }
    
    goBack(stepper: MatStepper) {
        this.currentStep = this.currentStep -1;
        stepper.previous();
    }
    
    goForward(stepper: MatStepper): void {
        this.currentStep = this.currentStep +1;
        stepper.next();
    }
    
    disabledButtonNext(): boolean {
        return false;
    }

}
