import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';

import { AuthGuard } from '../auth.guard';
import { AdminGuard } from '../admin.guard';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';

const MAT_MODULES = [
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...MAT_MODULES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...MAT_MODULES,
    FilterPipe,
  ],
  declarations: [FilterPipe],
  providers: [AuthGuard, AdminGuard]
})
export class SharedModule { }
