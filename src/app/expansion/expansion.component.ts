import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../posts/post.model';
import  {PostService } from '../posts/post.service';

@Component(
  {
    selector: 'app-expansion',
    templateUrl: './expansion.component.html',
    styleUrls:['./expansion.component.css']

  }
)
export class ExpansionComponent implements OnInit, OnDestroy {

posts:Post[];
postsSubscription: Subscription;

  constructor(public postService: PostService) {}

  ngOnInit()  {
    this.posts = this.postService.getPosts();
    this.postsSubscription =  this.postService.getPostsListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

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
