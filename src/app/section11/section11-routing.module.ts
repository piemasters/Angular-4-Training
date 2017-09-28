import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {AuthGuard} from '../auth-guard.service';
import {ServersRoutingComponent} from './servers/servers.component';
import {ServerRoutingComponent} from './servers/server/server.component';
import {ServerResolver} from './servers/server/server-resolver.service';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {NgModule} from '@angular/core';
import {Section11Component} from './section11.component';

const section11Routes: Routes = [
  {
    path: 'section11', component: Section11Component, children: [
    {path: '', component: HomeComponent},
    {
      path: 'users', component: UsersComponent, children: [
      {path: ':id:/:name', component: UserComponent},
    ]
    }, {
      path: 'servers',
      // canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component: ServersRoutingComponent,
      children: [
        {path: ':id', component: ServerRoutingComponent, resolve: {server: ServerResolver}},
        {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
      ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    // {path: '**', redirectTo: '/not-found'} // Ensure this is the last path
    // { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } // Redirect if the path is empty to /somewhere-else
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(section11Routes)],
  exports: [RouterModule]
})
export class Section11RoutingModule {
}




