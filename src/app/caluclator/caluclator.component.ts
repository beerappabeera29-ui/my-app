import { Component } from '@angular/core';

@Component({
  selector: 'app-caluclator',
  templateUrl: './caluclator.component.html',
  styleUrls: ['./caluclator.component.css']
})
export class CaluclatorComponent {

  num1:number=0;
  num2:number=0;
  result:number=0;

sum(){
  this.result=this.num1+this.num2;
}
sub(){
  this.result = this.num1 - this.num2
}
}
