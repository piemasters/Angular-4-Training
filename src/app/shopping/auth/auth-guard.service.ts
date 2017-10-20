import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromShopping from '../store/shopping.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthenticateGuard implements CanActivate {

    constructor(private store: Store<fromShopping.AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth')
          .take(1)
          .map((authState: fromAuth.State) => {
          return authState.authenticated;
        })
    }
}
