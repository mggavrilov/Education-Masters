import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const authGuards = {
  canLoad: [AuthGuard],
  canActivateChild: [AuthGuard],
};

const adminGuards = {
  canLoad: [AdminGuard],
  canActivateChild: [AdminGuard],
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'administration', loadChildren: './admin/admin.module#AdminModule', ...adminGuards },
  { path: 'register', component: RegisterComponent },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesModule', ...authGuards },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesModule' },
  { path: 'forum', loadChildren: './forum/forum.module#ForumModule', ...authGuards },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
