import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import {Assignment4Component} from './assignment4/assignment4.component';
import {Assignment5Component} from './assignment5/assignment5.component';
import {TestformComponent} from './assignment6/testform/testform.component';
import {ReactiveformComponent} from 'app/assignment7/reactiveform/reactiveform.component';
import {Section3Component} from './section3/section3.component';
import {Section5Component} from './section5/section5.component';
import {Section7Component} from './section7/section7.component';
import {Section9Component} from './section9/section9.component';
import {Section15Component} from './section15/section15.component';
import {Section17Component} from './section17/section17.component';
import {HttpComponent} from './section18/http/http.component';
import {ErrorPageComponent} from './section11/error-page/error-page.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment4', component: Assignment4Component },
  { path: 'assignment5', component: Assignment5Component },
  { path: 'assignment6', component: TestformComponent },
  { path: 'assignment7', component: ReactiveformComponent },
  { path: 'section3', component: Section3Component },
  { path: 'section5', component: Section5Component },
  { path: 'section7', component: Section7Component },
  { path: 'section9', component: Section9Component },
  { path: 'section15', component: Section15Component },
  { path: 'section17', component: Section17Component },
  { path: 'section18', component: HttpComponent },
  { path: 'recipes', loadChildren: './shopping/recipes/recipe.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent },
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  // {path: '**', redirectTo: '/not-found'} // Ensure this is the last path
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
