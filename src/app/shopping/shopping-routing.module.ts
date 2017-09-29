import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ErrorPageComponent} from '../section11/error-page/error-page.component';
import {NgModule} from '@angular/core';
import {ShoppingComponent} from './shopping.component';
import {RecipesComponent} from './recipes/recipes.component';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingComponent,  children: [
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent }, //  loadChildren: './recipes/recipe.module#RecipesModule'},
    // { path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule', canLoad: [AuthenticateGuard] },
    { path: 'shopping-list', component: ShoppingListComponent},
   // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {}
