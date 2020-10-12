import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [];
  title = 'angular-app';

  onPostCreated(post) {
    this.posts.push(post);
  }
}
