import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-caluclator',
  templateUrl: './bmi-caluclator.component.html',
  styleUrls: ['./bmi-caluclator.component.css']
})
export class BmiCaluclatorComponent {
height:number=0;
weight:number=0;
result:number=0;
abc:any;

caluclate(){
    this.result=this.weight/((this.height/100)*(this.height/100));
    
    if(this.result<18.5){
      this.abc="(underweight)"
    }
    else if (this.result>18.5 && this.result<=24.9){
      this.abc="(normal)"
    }
    else if(this.result>24.9 && this.result<=29.9){
      this.abc="(overweight)"
    }
    else if(this.result>29.9 && this.result<=34.9){
      this.abc="(obese)"
    }
    else{
      this.abc="(extrmly obese)"
    }
}



}
