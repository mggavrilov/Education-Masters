import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forum-thread-add',
  templateUrl: './forum-thread-add.component.html',
  styleUrls: ['./forum-thread-add.component.css']
})
export class ForumThreadAddComponent implements OnInit {
  public post: Post;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, public toastr: ToastrService) { }

  ngOnInit() {
    this.post = new Post('', '');
  }

  submit() {
    this.post.author = "Author";
    this.postService.addPost(this.post);
    this.toastr.success(`Post ${this.post.name} successfully added!`);
    this.router.navigate(['/forum']);
  }
}