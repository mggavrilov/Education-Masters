import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course.service';
import { Course } from '../course';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public courses: Course[];

  constructor(private courseService: CourseService, public toastr: ToastrService) {
  }

  ngOnInit() {
    this.courses = this.courseService.getAll();
  }

  deleteCourse(name: string) {
    const course = this.courses.find(c => c.name === name);
    this.courseService.removeCourse(course);
    this.toastr.error("Course successfully deleted!");
  }

}
