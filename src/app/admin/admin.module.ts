import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CourseEditComponent } from '../course-edit/course-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
 
  ],
  declarations: [AdminComponent, CourseEditComponent]
})
export class AdminModule { }
