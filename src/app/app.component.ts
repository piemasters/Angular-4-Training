import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-4-Training';

  constructor() {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAd4iac6Ozaw-7STJBAJxOjEdAMdt7FBUI',
      authDomain: 'ng-recipe-book-3a818.firebaseapp.com'
    });
  }
}
