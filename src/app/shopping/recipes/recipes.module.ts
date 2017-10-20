import { SharedModule } from '../../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { ShoppingRoutingModule } from '../shopping-routing.module';
import {StoreModule} from '@ngrx/store';
import {recipeReducer} from './store/recipe.reducers';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeStartComponent,
        RecipeListComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
        ShoppingRoutingModule,
        StoreModule.forFeature('recipes', recipeReducer)
    ],
    exports: [
       ShoppingRoutingModule
    ]
})
export class RecipesModule {

}
