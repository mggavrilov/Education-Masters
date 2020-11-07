import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: Post;

  constructor(private route: ActivatedRoute, private postsService: PostService) {
  }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    this.post = this.postsService.getPost(name);
  }

}
