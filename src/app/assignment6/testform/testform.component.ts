import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {
  @ViewChild('demoform') signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  password = '';
  submitted = false;
  user = {
    email: '',
    subscription: this.subscriptions[0],
    password: ''
  };


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm.value.email);
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }

}
