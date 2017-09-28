import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PipesComponent,
    FilterPipe,
    ReversePipe,
    SortPipe,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    PipesComponent,
    FilterPipe,
    ReversePipe,
    SortPipe,
    ShortenPipe
  ]
})
export class Section17Module {}
