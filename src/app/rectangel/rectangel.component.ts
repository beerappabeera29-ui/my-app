import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangel',
  templateUrl: './rectangel.component.html',
  styleUrls: ['./rectangel.component.css']
})
export class RectangelComponent {
  lenght:number=0;
  breatdth:number=0;
  result:number=0;
  pari:number=0;

  area(){
    this.result =this.lenght*this.breatdth
  }
  perimeter(){
    this.pari=2*(this.lenght+this.breatdth)
  }
}
