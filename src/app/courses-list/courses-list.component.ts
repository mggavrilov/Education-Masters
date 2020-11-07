import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { UserService } from '../user.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: Course[];
  displayedCourses: Course[];
  coursesPerPage = 5;
  logged: boolean;

  constructor(private courseService: CourseService, private userService: UserService) { }

  ngOnInit() {
    this.courses = this.courseService.getAll();

    this.courses.forEach(course => (<any>course).enrolled = Math.random() < 0.5);
    this.courses.filter(course => !!(<any>course).enrolled)
      .forEach(course => (<any>course).progress = Math.floor(Math.random() * 100));

    this.displayedCourses = this.courses.slice(0, this.coursesPerPage);

    this.logged = this.userService.loggedUser ? true : false;
  }

  changePage(event) {
    const page = event.pageIndex;
    const start = this.coursesPerPage * page;
    const end = start + this.coursesPerPage;
    this.displayedCourses = this.courses.slice(
      start, end
    );
  }
}
