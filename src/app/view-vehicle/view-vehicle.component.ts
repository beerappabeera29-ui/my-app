import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {

id:string="";
vehicles:any={}
  constructor(private activatedroute:ActivatedRoute,private vehicleservice:VehicleService){
    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        vehicleservice.getvehicles(data.id).subscribe(
          (data:any)=>{
            this.vehicles=data;
          }        )
      }
    )
  }
}
