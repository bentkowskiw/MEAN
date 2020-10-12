import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  title:string = '';
  description:string = '';
  certainty:number = 0;
  @Output()
  postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title:this.title,
      description:this.description,
      dateCreated:Date.now(),
      certainty:this.certainty,
    };
    this.postCreated.emit(post);
  }
}
