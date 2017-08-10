import { ObservableUserComponent } from './section13/observable-user/observable-user.component';
import { ObservableHomeComponent } from './section13/observable-home/observable-home.component';
import { RecipeEditComponent } from './shopping/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './shopping/recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './shopping/recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipesComponent } from './shopping/recipes/recipes.component';
import { ServerResolver } from './section11/servers/server/server-resolver.service';
import { ErrorPageComponent } from './section11/error-page/error-page.component';
import { CanDeactivateGuard } from './section11/servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './section11/page-not-found/page-not-found.component';
import { EditServerComponent } from './section11/servers/edit-server/edit-server.component';
import { ServerRoutingComponent } from './section11/servers/server/server.component';
import { ServersRoutingComponent } from './section11/servers/servers.component';
import { UserComponent } from './section11/users/user/user.component';
import { UsersComponent } from './section11/users/users.component';
import { HomeComponent } from './section11/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    // Shopping
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },

    // Section 11
    // { path: '', component: HomeComponent },
    // {
    //     path: 'users', component: UsersComponent, children: [
    //         { path: ':id:/:name', component: UserComponent },
    //     ]
    // }, {
    //     path: 'servers',
    //     // canActivate: [AuthGuard],
    //     canActivateChild: [AuthGuard],
    //     component: ServersRoutingComponent,
    //     children: [
    //         { path: ':id', component: ServerRoutingComponent, resolve: {server: ServerResolver} },
    //         { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    //     ]
    // },
    // // { path: 'not-found', component: PageNotFoundComponent },
    // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    // { path: '**', redirectTo: '/not-found' } // Ensure this is the last path
    // // { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } // Redirect if the path is empty to /somewhere-else

    // Section 13
    // { path: '', component: ObservableHomeComponent },
    // { path: 'user/:id', component: ObservableUserComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
