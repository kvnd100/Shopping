import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe1',
      'This is a test recipe',
      'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg',
      [new Ingredient('Tomato', 10), new Ingredient('Meat', 2)]
    ),
    new Recipe(
      'Recipe2',
      'This is a test recipe',
      'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg',
      [new Ingredient('Tomato', 10), new Ingredient('Meat', 2)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
