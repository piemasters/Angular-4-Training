import { Component, OnInit } from '@angular/core';
import { UnitTestUserService } from './user.service';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css'],
  providers: [ UnitTestUserService ]
})
export class UnitTestComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;

  constructor(private userService: UnitTestUserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }


}
