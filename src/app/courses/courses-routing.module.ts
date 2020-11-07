import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListComponent } from '../courses-list/courses-list.component';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  { path: 'course/:name', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
