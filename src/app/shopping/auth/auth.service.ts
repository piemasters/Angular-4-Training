import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Store} from '@ngrx/store';
import * as fromShopping from '../store/shopping.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthenticateService {

    constructor(private router: Router, private store: Store<fromShopping.AppState>) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(
            user => {
              this.store.dispatch(new AuthActions.Signup());
              firebase.auth().currentUser.getToken().then(
                (token: string) => {
                  this.store.dispatch(new AuthActions.SetToken(token));
                }
              )
            }
          )
        .catch(
            error => console.log(error)
        )
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
              this.store.dispatch(new AuthActions.Signin());
              this.router.navigate(['/shopping']);
                firebase.auth().currentUser.getToken().then(
                    (token: string) => {
                      this.store.dispatch(new AuthActions.SetToken(token));
                    }
                )
            }
        )
        .catch(
            error => console.log(error)
        )
    }

    logout() {
        firebase.auth().signOut();
    }

}
