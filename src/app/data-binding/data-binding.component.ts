import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  age = 20;
  name:string ="abc"

isInvaild:boolean = false;

city:string = "";
  
  submit(){
    alert('success')
  }
}
