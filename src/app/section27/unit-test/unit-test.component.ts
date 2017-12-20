import { Component, OnInit } from '@angular/core';
import { UnitTestUserService } from './user.service';
import { UnitTestDataService } from '../shared/data.service';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css'],
  providers: [ UnitTestUserService, UnitTestDataService ]
})
export class UnitTestComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private userService: UnitTestUserService, private dataService: UnitTestDataService ) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }


}
