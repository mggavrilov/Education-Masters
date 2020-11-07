import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './forum.component';
import { PostComponent } from '../post/post.component';
import { ForumThreadAddComponent } from '../forum-thread-add/forum-thread-add.component';

const routes: Routes = [
  { path: '', component: ForumComponent },
  { path: 'post/:name', component: PostComponent },
  { path: 'forum-thread-add', component: ForumThreadAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
