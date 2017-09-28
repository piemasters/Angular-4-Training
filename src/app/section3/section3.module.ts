import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ServerComponent,
        ServersComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ServerComponent,
        ServersComponent
    ]
})
export class Section3Module {}
