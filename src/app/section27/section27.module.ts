import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UnitTestComponent } from './unit-test/unit-test.component';

@NgModule({
  declarations: [
    UnitTestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    UnitTestComponent
  ]
})
export class Section27Module {}
