import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) {}

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-3a818.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
}
