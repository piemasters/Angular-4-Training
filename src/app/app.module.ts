import { RouterModule, Routes } from '@angular/router';
import { ServersService } from './section11/servers/servers.service';
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';
import { CounterService } from './assignment5/shared/counter.service';
import { UsersService } from './assignment5/shared/users.service';
import { LoggingService } from './section9/shared/logging.service';
import { AccountsService } from './section9/shared/accounts.service';
import { BasicHighlightDirective } from './section7/basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './section3/servers/server/server.component';
import { ServersComponent } from './section3/servers/servers.component';
import { HeaderComponent } from './shopping/header/header.component';
import { RecipesComponent } from './shopping/recipes/recipes.component';
import { RecipeListComponent } from './shopping/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './shopping/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './shopping/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './section5/cockpit/cockpit.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './Assignment4/game-control/game-control.component';
import { OddComponent } from './Assignment4/odd/odd.component';
import { EvenComponent } from './Assignment4/even/even.component';
import { DirectivesComponent } from './section7/directives/directives.component';
import { BetterHighlighterDirective } from './section7/better-highlighter/betterhighlighter.directive';
import { UnlessDirective } from './section7/unless/unless.directive';
import { DropdownDirective } from './shopping/shared/dropdown.directive';
import { AccountComponent } from './section9/account/account.component';
import { NewAccountComponent } from './section9/new-account/new-account.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { HomeComponent } from './section11/home/home.component';
import { UsersComponent } from './section11/users/users.component';
import { EditServerComponent } from './section11/servers/edit-server/edit-server.component';
import { UserComponent } from './section11/users/user/user.component';
import { ServersRoutingComponent } from './section11/servers/servers.component';
import { ServerRoutingComponent } from './section11/servers/server/server.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id:/:name', component: UserComponent },
    ]
  }, {
    path: 'servers', component: ServersRoutingComponent, children: [
      { path: ':id', component: ServerRoutingComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlighterDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    UserComponent,
    ServersRoutingComponent,
    ServerRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AccountsService,
    LoggingService,
    UsersService,
    CounterService,
    ShoppingListService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
