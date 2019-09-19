import { MatStepper } from "@angular/material";

export abstract class AbstractStepperComponent {
  protected currentStep: number = 1;

  goBack(stepper: MatStepper) {
    this.currentStep = this.currentStep - 1;
    stepper.previous();
  }

  goForward(stepper: MatStepper): void {
    this.currentStep = this.currentStep + 1;
    stepper.next();
  }

  disabledButtonNext(): boolean {
    return false;
  }
}
