import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() onLinkClick = new EventEmitter<string>();

  onSelect(listItem: string) {
    this.onLinkClick.emit(listItem);
  }
}
