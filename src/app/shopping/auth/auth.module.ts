import { AuthenticateRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthenticateRoutingModule
    ]
})
export class AuthenticateModule {

}
