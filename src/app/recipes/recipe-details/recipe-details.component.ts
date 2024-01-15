import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent {
  @Input() recipe!: Recipe;

  constructor(private shoppingService: ShoppingService) {}

  addToShoppingList() {
    this.shoppingService.addMultipleIngredients(this.recipe.ingredients);
  }
}
