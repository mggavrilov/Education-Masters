import { Component, OnInit } from '@angular/core';
import { LoginComponent} from '../login/login.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user;
  constructor(private userService: UserService, private router: Router, public toastr: ToastrService) { }

  ngOnInit() {
    this.userService.user$.subscribe(registeredUser =>
      !!registeredUser && this.router.navigate(['/courses']));
    this.user = new User("", "", "");
  }

  register() {
    this.userService.add(this.user);
    this.userService.logIn(this.user);
    this.toastr.success("Successfully registered!");
  }
}
