import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getAll();
    this.courses = this.courses.slice(0, 5);

    this.courses.forEach(course => (<any>course).progress = Math.floor(Math.random() * 100));
  }

}
