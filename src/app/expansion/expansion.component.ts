import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-expansion',
    templateUrl: './expansion.component.html',
  }
)
export class ExpansionComponent {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
