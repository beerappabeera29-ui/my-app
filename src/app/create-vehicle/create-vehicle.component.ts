import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  vehicleform: FormGroup = new FormGroup({

    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
    tyres: new FormControl(),

  })

  

     id:string=""; 
  constructor(private vehicleservice:VehicleService ,private activatedroute:ActivatedRoute){
    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        vehicleservice.getvehicles(this.id).subscribe(
          (data:Vehicle)=>{
            this.vehicleform.patchValue(data);
          }
        )
      }
    )
  }
  submit(){
    
    console.log(this.vehicleform);
    if(this.id){
       this.vehicleservice.editvehicle(this.id,this.vehicleform.value).subscribe(
      (data:Vehicle)=>{
        alert("succufully edit")
        this.vehicleform.reset();
      },
      (err:any)=>{
        alert('error')
      }
    )
    }
    else{
       this.vehicleservice.createvehicle(this.vehicleform.value).subscribe(
      (data:Vehicle)=>{
        alert("succufully create")
        this.vehicleform.reset();
      },
      (err:any)=>{
        alert('error')
      }
    )
    }
  
  }
}
