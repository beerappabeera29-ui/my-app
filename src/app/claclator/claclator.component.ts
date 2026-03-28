import { Component } from '@angular/core';

@Component({
  selector: 'app-claclator',
  templateUrl: './claclator.component.html',
  styleUrls: ['./claclator.component.css']
})
export class ClaclatorComponent {

  num1:number=0;
  num2:number=0;

  result:number=0;

  getresult(data:any){
   this.result=data;
  }

  

}
