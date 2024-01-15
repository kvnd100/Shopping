import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('inputName', { static: true }) name: ElementRef | undefined;
  @ViewChild('inputAmount', { static: true }) amount: ElementRef | undefined;

  constructor(private shoppingService: ShoppingService) {}

  addIngredient(e: any) {
    e.stopPropagation();
    e.preventDefault();
    if (
      this.name?.nativeElement.value.trim() !== '' &&
      this.amount?.nativeElement.value.trim() !== ''
    ) {
      this.shoppingService.addIngredients(
        this.name?.nativeElement.value.trim(),
        this.amount?.nativeElement.value.trim()
      );
    } else {
      throw new Error('empty string');
    }
  }
}
