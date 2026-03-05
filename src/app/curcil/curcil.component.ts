import { Component } from '@angular/core';

@Component({
  selector: 'app-curcil',
  templateUrl: './curcil.component.html',
  styleUrls: ['./curcil.component.css']
})
export class CurcilComponent {
  num: number=0;
  result:number=0;

  
  area(){
    this.result=Math.PI *  this.num * this.num;
    Math.floor(this.result)
  };
    perimeter() {
    this.result = 2 *Math.PI* this.num;
  }
}
