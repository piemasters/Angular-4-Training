import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServersRoutingComponent} from './servers/servers.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerRoutingComponent} from './servers/server/server.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {SharedModule} from '../shared/shared.module';
import {Section11RoutingModule} from './section11-routing.module';

@NgModule({
  declarations: [
    ErrorPageComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServersRoutingComponent,
    EditServerComponent,
    ServerRoutingComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Section11RoutingModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class Section11Module {}
