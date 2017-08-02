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
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent },
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
