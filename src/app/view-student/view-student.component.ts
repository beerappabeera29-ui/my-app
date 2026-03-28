import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school-id/school.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {

  id:string="";
  school:any={};
  constructor(private activatedroute:ActivatedRoute,private schoolservice:SchoolService){
    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        schoolservice.getschools(this.id).subscribe(
          (data:any)=>{
            this.school=data;
          }
        )
      }

    )
  }
  
}
