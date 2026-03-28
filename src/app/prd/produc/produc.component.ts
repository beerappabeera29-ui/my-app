import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { PrdService } from '../prd.service';

@Component({
  selector: 'app-produc',
  templateUrl: './produc.component.html',
  styleUrls: ['./produc.component.css']
})
export class ProducComponent {

  producform:FormGroup=new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required,Validators.minLength(15),Validators.maxLength(100)]),
    category:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required,Validators.min(2),Validators.max(10)]),
    discountPercentage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
    rating:new FormControl('',[Validators.required,Validators.min(2),Validators.max(5)]),
    stock:new FormControl('',[Validators.required]),
    
    dimensions:new FormGroup({
      width:new FormControl('',[Validators.required,Validators.min(2),Validators.max(5)]),
      height:new FormControl('',[Validators.required,Validators.min(2),Validators.max(5)]),
      depth:new FormControl('',[Validators.required,Validators.min(2),Validators.max(5)])
    }),
    tags:new FormControl(),
    // beauty:new FormControl(),
    // mascara:new FormControl()
    
    reviews:new FormArray([])
  })

  get reviewsFormArray(){
    return this.producform.get('reviews') as FormArray;
  }

  addcart(){
    this.reviewsFormArray.push(
      new FormGroup({
        rating:new FormControl('',[Validators.required,Validators.min(1),Validators.max(1)]),
        comment:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(20)]),
        date:new FormControl(),
        reviewerName:new FormControl(),
        reviewerEmail:new FormControl()
      })
    )
  }
  delete(i:number){
    this.reviewsFormArray.removeAt(i)
  }


  constructor(private prdservice:PrdService){
    this.producform.get('tags')?.valueChanges.subscribe(
      (data:string)=>{
        if(data==='beauty'){
          //add beauty
          this.producform.addControl('beauty', new FormControl());
          // remove 
          this.producform.removeControl('mascara')
        }
        else if (data==='mascara'){
          // add mascara
          this.producform.addControl('mascara',new FormControl());
          //remove beauty
          this.producform.removeControl('beauty')

        }
      }
    )
  }
  

  submit(){
    this.prdservice.createprd(this.producform.value).subscribe(
      (data:any)=>{
         console.log(this.producform.value);
        // alert('success')
       
        // this.producform.reset();
      },
      (err:any)=>{
        alert('error')
        console.log(err); 
        this.producform.reset()
      }
    )
  }



}
