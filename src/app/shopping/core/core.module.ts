import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {ShoppingRoutingModule} from '../shopping-routing.module';
import {RecipeService} from '../recipes/recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {AuthenticateService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
    ],
  imports: [
    SharedModule,
    ShoppingRoutingModule
  ],
  exports: [
    ShoppingRoutingModule,
    HeaderComponent
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    AuthenticateService,
    DataStorageService
  ],
})
export class CoreModule {}
