import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DirectivesComponent} from './directives/directives.component';
import {UnlessDirective} from './unless/unless.directive';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import {BetterHighlighterDirective} from './better-highlighter/betterhighlighter.directive';

@NgModule({
  declarations: [
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlighterDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DirectivesComponent
  ]
})
export class Section7Module {}
