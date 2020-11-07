import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  { path: '', component: FavoritesComponent },
  { path: 'course/:name', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
