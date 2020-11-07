import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, Roles } from './user';

@Injectable()
export class UserService {
  public users: User[];
  public user$: EventEmitter<User|null>;
  public loggedUser: User | null;

  constructor() {
    this.user$ = new EventEmitter();
    this.users = [
      new User('admin', Roles.Administrator),
    ];
  }

  public logIn(user: User) {
    // TODO: validate password here and fetch from users
    const existing = this.users.find( ({username}) => username === user.username) || user;
    this.loggedUser = existing;
    this.user$.next(existing);
  }

  public logOut() {
    this.loggedUser = null;
    this.user$.next(null);
  }

  public add(user: User) {
    this.users.push(user);
  }

}
