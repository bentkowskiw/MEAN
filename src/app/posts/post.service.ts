import { Injectable } from '@angular/core';
import { Post } from './post.model';
import {Subject} from 'rxjs';

@Injectable({providedIn:'root'})
export class PostService {
  private posts:Post[] = [];
  private postsUpdated: Subject<Post[]> = new Subject<Post[]>();
  getPosts()  {
    return [...this.posts];
  }

  getPostsListener()  {
    return this.postsUpdated.asObservable();
  }
  addPost(title:string, description:string, certainty:number) {
     const post: Post = {
      title:title,
      description:description,
      dateCreated: new Date(),
      certainty:certainty,
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }


}
