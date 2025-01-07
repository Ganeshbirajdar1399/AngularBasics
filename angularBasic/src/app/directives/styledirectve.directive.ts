import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyledirectve]'
})
export class StyledirectveDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'blue';
  }
}
