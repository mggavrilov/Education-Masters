import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { CoursesModule } from '../courses/courses.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    CoursesModule,
    SharedModule,
    RouterModule,
  ],
  exports: [RouterModule],
  declarations: [ FavoritesComponent ]
})
export class FavoritesModule { }