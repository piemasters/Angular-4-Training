import { Assignment4Component } from './assignment4.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        OddComponent,
        EvenComponent,
        GameControlComponent,
    ],
    exports: [
        OddComponent,
        EvenComponent,
        GameControlComponent
    ]
})
export class Assignment4Module {}
