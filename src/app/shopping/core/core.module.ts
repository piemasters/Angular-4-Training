import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {ShoppingRoutingModule} from '../shopping-routing.module';
import {RecipeService} from '../recipes/recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {AuthenticateService} from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from '../shared/auth.interceptor';
import {LoggingInterceptor} from '../shared/logging.interceptor';

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
    DataStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
})
export class CoreModule {}
