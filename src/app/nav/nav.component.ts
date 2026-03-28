import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  cartcount:number=0;
  
  constructor(private commonservice:CommonService){
    commonservice.getcount().subscribe(
      (data:number)=>{
        this.cartcount=data;
      }
    )
  }

  
}
