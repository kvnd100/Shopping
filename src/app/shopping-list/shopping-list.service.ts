import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  private Ingredients: Ingredient[] = [];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  addIngredients(name: string, amount: number) {
    this.Ingredients.push({ name, amount });
    this.ingredientsChanged.emit(this.Ingredients.slice());
  }

  addMultipleIngredients(ingredient: Ingredient[]) {
    this.Ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.Ingredients.slice());
  }

  getIngredients() {
    return this.Ingredients.slice();
  }
}
