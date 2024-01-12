import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  selectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  createRecipe() {
    this.recipes.push(
      new Recipe(
        'Recipe1',
        'This is a test recipe',
        'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg'
      ),
      new Recipe(
        'Recipe2',
        'This is a test recipe',
        'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg'
      )
    );
  }
}
