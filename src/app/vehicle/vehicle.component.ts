import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicle:any = [];
  term:string="";

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

filtervehicle(){
  this.vehicleservice.filtervehicle(this.term).subscribe(
   (data:any)=>{
    this.vehicle=data;
   },
   (eror:any)=>{
    alert("network issue")
   }
  )
}


pagevehicle(page:number){
  
  this.vehicleservice.pagevehicle(page).subscribe(
   (data:any)=>{
    this.vehicle=data;
   },
   (eror:any)=>{
    alert("network issue")
   }
  )
}

isAsc:boolean=false;
sortvehicle(column:string){
  this.isAsc=!this.isAsc;
  this.vehicleservice.sortvehicle(column,this.isAsc?'asc':'desc').subscribe(
   (data:any)=>{
    this.vehicle=data;
   },
   (eror:any)=>{
    alert("network issue")
   }
  )
}



deletevechicle(id:string){
  this.vehicleservice.deletevehicle(id).subscribe(
    (data:any)=>{
      alert("delete sucessfully")
      location.reload();
    },
    (error:any)=>{
      alert("internal server issu")
    }
  )
}


}
