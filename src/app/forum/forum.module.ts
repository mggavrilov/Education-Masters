import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { ForumComponent } from './forum.component';
import { ForumRoutingModule } from './forum-routing.module';
import { PostComponent } from '../post/post.component';
import { ForumThreadAddComponent } from '../forum-thread-add/forum-thread-add.component';

@NgModule({
  imports: [
    CommonModule,
    ForumRoutingModule,

    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [RouterModule],
  declarations: [ForumComponent, PostComponent, ForumThreadAddComponent]
})
export class ForumModule { }