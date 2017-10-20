import {AuthenticateGuard} from '../auth/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesComponent} from './recipes.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingComponent} from '../shopping.component';

const recipesRoutes: Routes = [
  {
    path: '', component: ShoppingComponent, children: [
    {
      path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent, pathMatch: 'full'},
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthenticateGuard]},
        { path: ':id', component: RecipeDetailComponent},
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthenticateGuard]}
    ]
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],
  providers: [AuthenticateGuard]
})
export class RecipesRoutingModule {
}
