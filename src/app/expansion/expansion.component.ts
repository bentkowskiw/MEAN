import { Component, Input } from '@angular/core';
import { Post } from '../posts/post.model';

@Component(
  {
    selector: 'app-expansion',
    templateUrl: './expansion.component.html',
    styleUrls:['./expansion.component.css']

  }
)
export class ExpansionComponent {

  @Input()
  posts:Post[] =[];

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
