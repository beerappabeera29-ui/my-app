import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
 
})
export class WeatherComponent {

weather:any='';

  constructor(private weatherservice:WeatherService){
  weatherservice.getweather().subscribe(
    (data:any)=>{
    this.weather=data;
    console.log(data);
    
    },
    (err:any)=>{
      alert("error")
    }
  )
}

    
  }

