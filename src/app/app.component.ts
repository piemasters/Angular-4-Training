import { ObsUsersService } from './section13/obs-users.service';
import { UsersService } from './assignment5/shared/users.service';
import { AccountsService } from './section9/shared/accounts.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  loadedFeature = 'recipe';
  accounts: {name: string, status: string}[] = [];
  user1Activated = false;
  user2Activated = false;

  constructor(private accountsService: AccountsService, private userService: UsersService, private obsUsersService: ObsUsersService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAd4iac6Ozaw-7STJBAJxOjEdAMdt7FBUI",
      authDomain: "ng-recipe-book-3a818.firebaseapp.com"
    });

    this.accounts = this.accountsService.accounts;
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

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onCounterFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
