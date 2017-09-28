import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveComponent} from './reactive/reactive.component';
import {FormsComponent} from './forms/forms.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    FormsComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsComponent,
    ReactiveComponent
  ]
})
export class Section15Module {}
