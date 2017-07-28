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
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id:/:name', component: UserComponent },
        ]
    }, {
        path: 'servers', canActivate: [AuthGuard], component: ServersRoutingComponent, children: [
            { path: ':id', component: ServerRoutingComponent },
            { path: ':id/edit', component: EditServerComponent }
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' } // Ensure this is the last path
    // { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } // Redirect if the path is empty to /somewhere-else
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
