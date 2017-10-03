import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyAd4iac6Ozaw-7STJBAJxOjEdAMdt7FBUI',
    //   authDomain: 'ng-recipe-book-3a818.firebaseapp.com'
    // });
  }

}
