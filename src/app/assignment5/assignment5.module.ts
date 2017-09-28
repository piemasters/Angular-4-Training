import { CommonModule } from '@angular/common';
import { Assignment5Component } from './assignment5.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ActiveUsersComponent,
        InactiveUsersComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ActiveUsersComponent,
        InactiveUsersComponent
    ]
})
export class Assignment5Module {}

