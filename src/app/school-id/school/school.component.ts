import { Component, } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {

   term:string="";
   column:string="";
   order:string="";
   page:number=1;
   limit:number=10;
   school:any=[];

  constructor(private schoolservice:SchoolService){
    schoolservice.getschool().subscribe(
      (data:any)=>{
        this.school=data;
        console.log(data);
      },
      (err:any)=>{
        alert('error')
      }
    )
  }

  getschoolwithqueryparams(){
    this.schoolservice.getschoolwithqueryparams(this.term,this.column,this.order,this.page,this.limit).subscribe(
      (data:any)=>{
        this.school=data;
        console.log(data)
      },
      (err:any)=>{
        alert('error')
      }
    )
  }
  
  sort(column:string,order:string){
    this.column=column;
    this.order=order;
    this.getschoolwithqueryparams();
  }


  


paginate(page:number,limit:number){
  this.page=page;
  this.limit=limit;
  this.getschoolwithqueryparams();
}

}
