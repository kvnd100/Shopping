import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let nextElement = this.elRef.nativeElement.nextElementSibling;

    if (this.isOpen) {
      this.renderer.addClass(nextElement, 'show');
    } else {
      this.renderer.removeClass(nextElement, 'show');
    }
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.isOpen = false;
      let dropdown = this.elRef.nativeElement.nextElementSibling;
      this.renderer.removeClass(dropdown, 'show');
    }
  }
}
