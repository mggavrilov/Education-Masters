import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from '../courses-list/courses-list.component';
import { SharedModule } from '../shared/shared.module';
import { CourseComponent } from '../course/course.component';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    CoursesRoutingModule,
    SharedModule,
    MatPaginatorModule,
  ],
  declarations: [CoursesListComponent, CourseComponent]
})
export class CoursesModule { }
