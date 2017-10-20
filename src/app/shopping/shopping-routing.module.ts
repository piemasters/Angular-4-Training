import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

import {NgModule} from '@angular/core';
import {ShoppingComponent} from './shopping.component';
import {RecipesComponent} from './recipes/recipes.component';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingComponent,  children: [
    { path: '', component: HomeComponent},
    { path: 'recipes', component: RecipesComponent },
    // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingListComponent},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {}
