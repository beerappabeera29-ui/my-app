import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SchoolService } from '../school-id/school.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {


  studentform: FormGroup = new FormGroup({

    name: new FormControl(),
    phone: new FormControl(),
    city: new FormControl(),
    dob: new FormControl(),
    profile_picture: new FormControl(),
    email: new FormControl(),
    school_logo: new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
    // emial: new FormControl(),

  })
    id:string="";

    constructor(private schoolservice:SchoolService,private activatedroute:ActivatedRoute){
      activatedroute.params.subscribe(
        (data:any)=>{
          this.id=data.id;

          schoolservice.getschools(data.id).subscribe(
            (data:any)=>{
              this.studentform.patchValue(data);
            }
          )
        }
      )
    }


  submit(){
    console.log(this.studentform)
    
    if(this.id){
       this.schoolservice.editschool(this.id, this.studentform.value).subscribe(
      (data:any)=>{
        alert('student value edit successfully')
        this.studentform.reset();

      },
      (err:any)=>{
        alert('this value is error');
  console.log(err);
  }
    )
    }
  else{
     this.schoolservice.createschool(this.studentform.value).subscribe(
      (data:any)=>{
        alert('studeny value created successfully')
        this.studentform.reset();

      },
      (err:any)=>{
        alert('this data not macth as api')
    console.log(err);
    }
    )
  }
  }
}
