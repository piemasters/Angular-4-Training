import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthenticateService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticateService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req)
    // const copiedReq = req.clone({headers: req.headers.append('', '')});
    const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
    console.log('Intercepted!', copiedReq)
    return next.handle(copiedReq);
  }
}
