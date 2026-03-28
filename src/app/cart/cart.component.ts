import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

     cartcount:number=0;

  constructor(private commonservice:CommonService){
    commonservice.getcount().subscribe(
      (data:number)=>{
        this.cartcount=data;
      }
    )
  }

  

}
