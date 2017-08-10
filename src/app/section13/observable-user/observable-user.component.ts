import { ObsUsersService } from '../obs-users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-observable-user',
  templateUrl: './observable-user.component.html',
  styleUrls: ['./observable-user.component.css']
})
export class ObservableUserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private usersService: ObsUsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }

}
