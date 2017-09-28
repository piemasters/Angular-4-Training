import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ObservableHomeComponent} from './observable-home/observable-home.component';
import {ObservableUserComponent} from './observable-user/observable-user.component';
import {SharedModule} from '../shared/shared.module';
import {Section13RoutingModule} from './section13-routing.module';

@NgModule({
  declarations: [
    ObservableHomeComponent,
    ObservableUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    Section13RoutingModule
  ],
  exports: [
    CommonModule,
    SharedModule
  ]
})
export class Section13Module {}
