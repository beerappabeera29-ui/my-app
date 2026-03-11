import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private elementref:ElementRef) { }
  @HostListener('keyup')
  capital(){
    this.elementref.nativeElement.value=this.elementref.nativeElement.value.toUppercase();
  }

}
