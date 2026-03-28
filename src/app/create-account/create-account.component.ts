import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  accountform: FormGroup= new FormGroup({
     account_name:new  FormControl(),
     available_balance:new FormControl(),
     account_number:new  FormControl(),
     city:new FormControl(),
     profie_picture:new  FormControl(),
     ifsc_code:new FormControl(),
  });

 id:string="";
 
  constructor(private accountservice:AccountService,private activatedroute:ActivatedRoute){
    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        accountservice.getaccounts(data.id).subscribe(
          (data:any)=>{
            this.accountform.patchValue(data);
          }
        )
      }
    )
  }
  
  submit(){
    console.log(this.accountform.value)
    if(this.id){
        this.accountservice.editaccount(this.id,this.accountform.value).subscribe(
      (data:any)=>{
        alert(' account edit successfully');
        this.accountform.reset();
      },
      (err:any)=>{
        alert('error')
      }
    )
    }
    else{
        this.accountservice.createaccount(this.accountform.value).subscribe(
      (data:any)=>{
        alert('create account successfully');
        this.accountform.reset();
      },
      (err:any)=>{
        alert('error')
      }
    )
    }
  }
}
