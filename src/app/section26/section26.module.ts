import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationsComponent} from './animations/animations.component';

@NgModule({
  declarations: [
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    AnimationsComponent
  ]
})
export class Section26Module {}
