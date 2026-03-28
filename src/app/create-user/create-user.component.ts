import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { capgeminiEmail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
 userform:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(100)]),
  email:new FormControl('',[Validators.required,Validators.email,capgeminiEmail]),
  phone:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
  password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{8,}$/)]),
  address:new FormGroup({
    city:new FormControl('',[Validators.required,Validators.minLength(3)]),
    pin:new FormControl('',[Validators.required,Validators.min(6),Validators.max(6)]),
  }),
    type:new FormControl(),
    // busfee: new FormControl(),
    // hostelfee:new FormControl(),
  

  cards:new FormArray([]),
 })

 get cardsFormArry(){
  return this.userform.get('cards') as FormArray;
 }

 addcard(){
  this.cardsFormArry.push(
    new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      Number:new FormControl('',[Validators.required,Validators.min(10),Validators.max(10)]),
      cvv:new FormControl('',[Validators.required])
    })
  )
 }

 delete(i:number){
  this.cardsFormArry.removeAt(i)
 }

 constructor(){
  this.userform.get('type')?.valueChanges.subscribe(
    (data:string)=>{
      if(data=== 'dayScholor'){
        // add busfee
        this.userform.addControl('busfee',new FormControl('',[Validators.required]));
        // remove hostelfee
        this.userform.removeControl('hostelfee')
      }
      else if(data==='rasidential'){

        //add hostelfee
        this.userform.addControl('hostelfee',new FormControl('',Validators.required));
        // remobve busfee
        this.userform.removeControl('busfee');

      }
    }
  )
 }

 

 submit(){
  console.log(this.userform);
 }
}
