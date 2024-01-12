import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Output() selectedRecipe = new EventEmitter<void>();
  @Input() recipeItem!: Recipe;

  onSelect() {
    this.selectedRecipe.emit();
  }
}
