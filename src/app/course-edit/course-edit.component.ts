import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  public course: Course;
  public originalName: string;

  constructor
    (
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CourseService,
    public toastr: ToastrService) {
  }

  ngOnInit() {
    if (!this.route.snapshot.params['name']) {
      const name = '';
      this.course = new Course('', '');
      this.originalName = '';
    }
    else {
      const name = this.route.snapshot.params['name'];
      this.course = this.coursesService.getCourse(name);
      this.originalName = this.course.name;
    }
  }

  submit() {
    if (this.originalName) {
      this.coursesService.editCourse(this.course, this.originalName);
    }
    else {
      this.coursesService.addCourse(this.course);
    }

    this.router.navigate(['/administration']);

    if (this.originalName) {
      this.toastr.info("Course successfully edited!");
    }
    else {
      this.toastr.success(`Course ${this.course.name} successfully added!`);
    }
  }
}
