import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('inputName', { static: true }) name: ElementRef | undefined;
  @ViewChild('inputAmount', { static: true }) amount: ElementRef | undefined;
  @Output() sendIngredient = new EventEmitter<Ingredient>();



  addIngredient(e: any) {
    e.stopPropagation();
    e.preventDefault();

    if (
      this.name?.nativeElement.value.trim() !== '' &&
      this.amount?.nativeElement.value.trim() !== ''
    ) {
      this.sendIngredient.emit({
        name: this.name?.nativeElement.value.trim(),
        amount: this.amount?.nativeElement.value.trim(),
      });
    } else {
      throw new Error('empty string');
    }
  }
}
