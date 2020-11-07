import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../course.service';
import { Course } from '../course';
import { UserService } from '../user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course: Course;
  public logged: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private coursesService: CourseService,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    this.course = this.coursesService.getCourse(name);
    this.logged = this.userService.loggedUser ? true : false;
  }
}
