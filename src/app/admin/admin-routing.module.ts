import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CourseEditComponent } from '../course-edit/course-edit.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'course/:name', component: CourseEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
