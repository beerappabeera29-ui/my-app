import { Component } from '@angular/core';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechicle2',
  templateUrl: './vechicle2.component.html',
  styleUrls: ['./vechicle2.component.css']
})
export class Vechicle2Component {

  term: string = "";
  column: string = "";
  order: string = "";
  page: number = 1;



  vehicle: any = [];


  constructor(private vehicleservice: VehicleService) {
     this.getvechiclewithqueryparams();
  }

  getvechiclewithqueryparams(){
    this.vehicleservice.getvehiclewithqueryparams(this.term,this.column,this.order,this.page).subscribe(
      (data:any)=>{
        this.vehicle=data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }
  search(){
    this.getvechiclewithqueryparams();
  }
  isAsc:boolean=false;
  sort(column:string){
    this.column=column;

    this.isAsc=!this.isAsc;
    this.order=this.isAsc?'asc':'desc';

    this.getvechiclewithqueryparams();
  }
  pagevechicle(page:number){
    this.page=page;

    this.getvechiclewithqueryparams();
  }

}
