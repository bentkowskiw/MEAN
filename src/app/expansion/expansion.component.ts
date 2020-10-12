import { Component, Input } from '@angular/core';

@Component(
  {
    selector: 'app-expansion',
    templateUrl: './expansion.component.html',
    styleUrls:['./expansion.component.css']

  }
)
export class ExpansionComponent {

  @Input()
  posts =[];
  
  step = -1;

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
