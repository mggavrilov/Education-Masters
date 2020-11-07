import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;

  constructor(private userService: UserService, private router: Router, public toastr: ToastrService) { }

  ngOnInit() {
    this.userService.user$.subscribe(loggedUser =>
      !!loggedUser && this.router.navigate(['/courses']));

    this.user = new User("", "");
  }

  logIn() {
    this.userService.logIn(this.user);
    this.router.navigate(['/courses']);
    this.toastr.success("Successfully logged in!");
  }

}
