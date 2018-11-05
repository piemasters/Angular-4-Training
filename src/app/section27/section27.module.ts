import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UnitTestComponent } from './unit-test/unit-test.component';
import { UnitTestReversePipe } from './shared/reverse.pipe';

@NgModule({
  declarations: [
    UnitTestComponent,
    UnitTestReversePipe
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
