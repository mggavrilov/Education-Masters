import { Injectable } from '@angular/core';
import { Route, CanActivate, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private userService: UserService) {
  }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    return this.isAuthorized();
  }

  canLoad(_route: Route): boolean {
    return this.isAuthorized();
  }

  canActivateChild(_childRoute: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean {
    const user = this.userService.loggedUser;
    return user && user.isAdmin();
  }
}
