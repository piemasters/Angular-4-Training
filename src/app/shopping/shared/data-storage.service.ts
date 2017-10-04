import {AuthenticateService} from '../auth/auth.service';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthenticateService) {
  }

  storeRecipes() {
    // const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer token12345');

    // return this.httpClient.put('https://ng-recipe-book-3a818.firebaseio.com/recipes.json', // ?auth=' + token,
    //   this.recipeService.getRecipes(), {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    //   });

    const req = new HttpRequest(
      'PUT',
      'https://ng-recipe-book-3a818.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true
      }
    )
    return this.httpClient.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();
    // this.httpClient.get('https://ng-recipe-book-3a818.firebaseio.com/recipes.json?auth=' + token, {
    //   observe: 'response',
    //   responseType: 'json'
    // })
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3a818.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-3a818.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
