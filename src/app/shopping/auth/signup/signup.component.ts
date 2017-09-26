import { AuthenticateService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticateService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
     const email = form.value.email;
     const password = form.value.password;
     this.authService.signupUser(email, password);
  }

}
