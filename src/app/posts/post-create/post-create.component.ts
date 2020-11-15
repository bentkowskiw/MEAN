import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent  {
  title:string = '';
  description:string = '';
  certainty:number = 0;


  constructor(public postService: PostService){}



  onAddPost(postForm:NgForm) {
    if(postForm.invalid)
     return;

    this.postService.addPost(postForm.value.title,postForm.value.description,postForm.value.certainty);
    postForm.resetForm();
  }

  formatLabel(value: number) {
    return value + '%';
}
}
