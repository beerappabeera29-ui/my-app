import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

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

  constructor(private vehicleservice:VehicleService){}
  submit(){
    console.log(this.vehicleform);
    this.vehicleservice.createvehicle(this.vehicleform.value).subscribe(
      (data:any)=>{
        alert("succufully")
        this.vehicleform.reset();
      },
      (err:any)=>{
        alert('error')
      }
    )
  
  }
}
