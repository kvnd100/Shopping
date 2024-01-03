import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  createRecipe() {
    this.recipes.push(
      new Recipe(
        'Recipe1',
        'This is a test recipe',
        'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg'
      ),
      new Recipe(
        'Recipe1',
        'This is a test recipe',
        'https://marketplace.canva.com/EAEzSj77_B4/2/0/1067w/canva-beige-cute-recipe-card-xDHAiGpfgKU.jpg'
      )
    );
    console.log(this.recipes);
  }
}
