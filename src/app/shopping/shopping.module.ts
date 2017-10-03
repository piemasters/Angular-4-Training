// Angular
import { NgModule } from '@angular/core';
import {ShoppingComponent} from './shopping.component';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthenticateModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {RecipesModule} from './recipes/recipe.module';
import {StoreModule} from '@ngrx/store';
import {shoppingListReducer} from "./shopping-list/store/shopping-list.reducers";

@NgModule({
  declarations: [
    ShoppingComponent
  ],
  imports: [
    ShoppingRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthenticateModule,
    CoreModule,
    RecipesModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  bootstrap: [ShoppingComponent]
})
export class ShoppingModule { }
