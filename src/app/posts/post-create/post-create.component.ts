import { Component } from '@angular/core';




@Component ({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
})
export class PostCreateComponent  {
  textAreaValue = '';
  postValue='input value...';
onAddPost() {
  this.postValue = this.textAreaValue;
}
}
