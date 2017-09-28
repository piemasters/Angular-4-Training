import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ObservableHomeComponent} from './observable-home/observable-home.component';
import {ObservableUserComponent} from './observable-user/observable-user.component';
import {Section13Component} from './section13.component';

const section13Routes: Routes = [
  {
    path: 'section13', component: Section13Component, children: [
    {path: '', component: ObservableHomeComponent},
    {path: 'user/:id', component: ObservableUserComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(section13Routes)],
  exports: [RouterModule]
})
export class Section13RoutingModule {
}
