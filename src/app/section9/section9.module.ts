import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AccountComponent} from './account/account.component';
import {NewAccountComponent} from './new-account/new-account.component';

@NgModule({
  declarations: [
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AccountComponent,
    NewAccountComponent
  ]
})
export class Section9Module {}

