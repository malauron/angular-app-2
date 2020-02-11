import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A text recipe', 'This is simply a test.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F14MgXgdennY%2Fhqdefault.jpg&f=1&nofb=1'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A text recipe2', 'This is simply a test2.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F14MgXgdennY%2Fhqdefault.jpg&f=1&nofb=1')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
