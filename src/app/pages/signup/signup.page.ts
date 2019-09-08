import { Component, OnInit } from '@angular/core';
import { UserOptions } from '../../interfaces/user-options';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { name: '', email: '', phone: null, location: '', numberofemployees: null, startDate: new Date(), endDate: new Date() };
  submitted = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.router.navigateByUrl("/thankyou");
    }
  }
}
