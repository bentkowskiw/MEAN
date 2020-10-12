import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

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
  postCreated = new EventEmitter<Post>();

  onAddPost() {
    const post: Post = {
      title:this.title,
      description:this.description,
      dateCreated:new Date(),
      certainty:this.certainty,
    };
    this.postCreated.emit(post);
  }

  formatLabel(value: number) {
    return value + '%';
}
}
