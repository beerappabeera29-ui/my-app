import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReeService } from '../ree.service';

@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
export class ActComponent {

  constructor(private reeservice:ReeService){}

@Input()  num1:number=0;
@Input() num2:number=0;

 @Output()  bEvent:EventEmitter<number>=new EventEmitter();
add(){
  this.reeservice.setcount();
  const sum=Number(this.num1)+Number(this.num2);
  this.bEvent.emit(sum);
  
}
sub(){
  this.reeservice.setcount();
  const sum=Number(this.num1)-Number(this.num2);
  this.bEvent.emit(sum);
  
}

mlt(){
  this.reeservice.setcount();
  const sum=Number(this.num1)*Number(this.num2);
  this.bEvent.emit(sum);
  
}

div(){
  this.reeservice.setcount();
  const sum=Number(this.num1)/Number(this.num2);
  this.bEvent.emit(sum);
  
}

}
