import { ObsUsersService } from './section13/obs-users.service';
import { ServerResolver } from './section11/servers/server/server-resolver.service';
import { CanDeactivateGuard } from './section11/servers/edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HeaderComponent } from './shopping/header/header.component';
import { ShoppingListService } from './shopping/shopping-list/shopping-list.service';
import { RecipesComponent } from './shopping/recipes/recipes.component';
import { RecipeDetailComponent } from './shopping/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './shopping/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './shopping/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shopping/shared/dropdown.directive';


import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';

import { CounterService } from './assignment5/shared/counter.service';
import { UsersService } from './assignment5/shared/users.service';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';


import { ServerComponent } from './section3/servers/server/server.component';
import { ServersComponent } from './section3/servers/servers.component';

import { CockpitComponent } from './section5/cockpit/cockpit.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';

import { BasicHighlightDirective } from './section7/basic-highlight/basic-highlight.directive';
import { UnlessDirective } from './section7/unless/unless.directive';
import { DirectivesComponent } from './section7/directives/directives.component';
import { BetterHighlighterDirective } from './section7/better-highlighter/betterhighlighter.directive';

import { AccountComponent } from './section9/account/account.component';
import { NewAccountComponent } from './section9/new-account/new-account.component';
import { LoggingService } from './section9/shared/logging.service';
import { AccountsService } from './section9/shared/accounts.service';

import { HomeComponent } from './section11/home/home.component';
import { UsersComponent } from './section11/users/users.component';
import { EditServerComponent } from './section11/servers/edit-server/edit-server.component';
import { UserComponent } from './section11/users/user/user.component';
import { ServersRoutingComponent } from './section11/servers/servers.component';
import { ServerRoutingComponent } from './section11/servers/server/server.component';
import { PageNotFoundComponent } from './section11/page-not-found/page-not-found.component';
import { ServersService } from './section11/servers/servers.service';
import { ErrorPageComponent } from './section11/error-page/error-page.component';
import { RecipeStartComponent } from './shopping/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './shopping/recipes/recipe-edit/recipe-edit.component';
import { ObservableHomeComponent } from './section13/observable-home/observable-home.component';
import { ObservableUserComponent } from './section13/observable-user/observable-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    OddComponent,
    EvenComponent,
    Assignment4Component,
    GameControlComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    UnlessDirective,
    DirectivesComponent,
    BetterHighlighterDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    UserComponent,
    ServersRoutingComponent,
    ServerRoutingComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ObservableHomeComponent,
    ObservableUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AccountsService,
    LoggingService,
    UsersService,
    CounterService,
    ShoppingListService,
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver,
    ObsUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
