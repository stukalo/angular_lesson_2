import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirectiveDirective {
  constructor(private el: ElementRef) { }

  @Input()
  confirmMessage: string;

  @HostListener('click', ['$event'])
  public onClick(): void {
    const confirmed = window.confirm(this.confirmMessage);
    (this.el.nativeElement as HTMLElement).style.backgroundColor = 'red';
  }

}
