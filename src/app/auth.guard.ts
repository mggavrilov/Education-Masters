import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(): boolean {
    return this.isAuthorized();
  }

  canLoad(): boolean {
    return this.isAuthorized();
  }

  canActivateChild(): boolean {
    return this.isAuthorized();
  }

  private isAuthorized(): boolean {
    const user = this.userService.loggedUser;
    return !!user;
  }
}
