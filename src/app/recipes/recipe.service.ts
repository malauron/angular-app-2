import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty schnitzel - just awesome!',
      'https://i.ytimg.com/vi/pc3YeZWwnLc/maxresdefault.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    // tslint:disable-next-line:max-line-length
    new Recipe(
      'Big fat burger',
      'What else you need to say!',
      'https://i.ytimg.com/vi/xXFRe457uoI/maxresdefault.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
