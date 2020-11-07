import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts: Post[]
  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.posts = this.postsService.getAll();
  }

}
