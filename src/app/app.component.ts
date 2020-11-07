import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Education Masters';
  logged: boolean;
  admin: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(newUser => {
      this.logged = !!newUser;
      this.admin = newUser && newUser.isAdmin();
    });
  }
}
