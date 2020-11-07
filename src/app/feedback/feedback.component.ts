import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormReview } from '../formReview'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public form;
  constructor(private router: Router, public toastr: ToastrService) { }

  ngOnInit() {
    this.form = new FormReview("","","");
  }

  submit() {
    this.router.navigate(['/courses']);
    this.toastr.success("Feedback successfully sent!");
  }
}
