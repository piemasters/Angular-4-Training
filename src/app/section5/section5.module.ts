import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CockpitComponent} from './cockpit/cockpit.component';
import {ServerElementComponent} from './server-element/server-element.component';

@NgModule({
  declarations: [
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CockpitComponent,
    ServerElementComponent
  ]
})
export class Section5Module {}
