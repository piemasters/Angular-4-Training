import { Component, OnInit } from '@angular/core';
import {ObsUsersService} from './obs-users.service';

@Component({
  selector: 'app-section13',
  templateUrl: './section13.component.html',
  styleUrls: ['./section13.component.css']
})
export class Section13Component implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private obsUsersService: ObsUsersService) { }

  ngOnInit() {
    this.obsUsersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    )
  }

}
