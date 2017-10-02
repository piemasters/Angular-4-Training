// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Section 3
import { Section3Component } from './section3/section3.component';
import { Section3Module } from './section3/section3.module';

// Section 5
import { Section5Component } from './section5/section5.component';
import { Section5Module } from './section5/section5.module';

// Section 7
import { Section7Component } from './section7/section7.component';
import { Section7Module } from 'app/section7/section7.module';

// Section 9
import { Section9Component } from './section9/section9.component';
import { Section9Module } from 'app/section9/section9.module';
import { LoggingService } from './section9/shared/logging.service';
import { AccountsService } from './section9/shared/accounts.service';

// Section 11
import { Section11Component } from './section11/section11.component';
import { Section11Module } from './section11/section11.module';
import { ServerResolver } from './section11/servers/server/server-resolver.service';
import { CanDeactivateGuard } from './section11/servers/edit-server/can-deactivate-guard.service';
import { ServersService } from './section11/servers/servers.service';

// Section 13
import { Section13Component } from './section13/section13.component';
import { ObsUsersService } from './section13/obs-users.service';
import { Section13Module } from './section13/section13.module';

// Section 15
import { Section15Component } from './section15/section15.component';
import { Section15Module } from './section15/section15.module';

// Section 17
import { Section17Component } from './section17/section17.component';
import { Section17Module } from './section17/section17.module';

// Section 18
import { HttpComponent } from './section18/http/http.component';
import { ServerService } from './section18/http/server.service';

// Assignment 4
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment4Module } from './assignment4/assignment4.module';

// Assignment 5
import { Assignment5Component } from './assignment5/assignment5.component';
import { Assignment5Module } from './assignment5/assignment5.module';
import { CounterService } from './assignment5/shared/counter.service';
import { UsersService } from './assignment5/shared/users.service';

// Assignment 6
import { TestformComponent } from './assignment6/testform/testform.component';

// Assignment 7
import { ReactiveformComponent } from './assignment7/reactiveform/reactiveform.component';

// Shopping
import { ShoppingComponent } from './shopping/shopping.component';
import {ShoppingModule} from './shopping/shopping.module';

// Shared
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ApphomeComponent } from './apphome/apphome.component';


@NgModule({
  declarations: [
    AppComponent, // Angular
    ApphomeComponent, // Angular
    Section3Component, // Section 3
    Section5Component, // Section 5
    Section7Component, // Section 7
    Section9Component, // Section 9
    Section11Component, // Section 11
    Section13Component, // Section 13
    Section15Component, // Section 15
    Section17Component, // Section 17
    HttpComponent, // Section 18
    Assignment4Component, // Assignment 4
    Assignment5Component, // Assignment 5
    TestformComponent, // Assignment 6
    ReactiveformComponent, // Assignment 7
  ],
  imports: [
    BrowserModule, // Angular
    HttpModule, // Angular
    HttpClientModule,
    AppRoutingModule, // Angular
    FormsModule, // Angular
    ReactiveFormsModule, // Angular
    Section3Module, // Section 3
    Section5Module, // Section 5
    Section7Module, // Section 7
    Section9Module, // Section 9
    Section11Module, // Section 11
    Section13Module, // Section 13
    Section15Module, // Section 15
    Section17Module, // Section 17
    Assignment4Module, // Assignment 4
    Assignment5Module, // Assignment 5
    ShoppingModule, // Shopping
  ],
  providers: [
    AccountsService, // Section 9
    LoggingService, // Section 9
    ServersService, // Section 11
    ServerResolver, // Section 11
    CanDeactivateGuard, // Section 11
    ObsUsersService, // Section 13
    ServerService, // Section 18
    UsersService, // Assignment 5
    CounterService, // Assignment 5
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
