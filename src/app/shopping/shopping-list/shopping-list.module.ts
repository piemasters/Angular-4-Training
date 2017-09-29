import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from '@angular/core';
import {ShoppingRoutingModule} from '../shopping-routing.module';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShoppingRoutingModule
    ],
    exports: [
        ShoppingRoutingModule,
    ]
})
export class ShoppingListModule {}
