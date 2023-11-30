import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appEnableFor]',
  standalone: true
})
export class EnableForDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
