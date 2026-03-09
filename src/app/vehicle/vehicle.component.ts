import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicle:any = [];
  

constructor(private vehicleservice:VehicleService){
  vehicleservice.getvehicle().subscribe(
    (data:any)=>{
     this.vehicle = data;
     console.log(data)
    },
    (err:any)=>{
      alert("internal sever error");
    }
  )
}


}
