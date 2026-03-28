import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent {

  id:string="";
  account:any={};

  constructor(private activatedroute:ActivatedRoute,private accountservice:AccountService){
    activatedroute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

      accountservice.getaccounts(data.id).subscribe(
      (data:any)=>{
        this.account=data;
      })
      }
    )
    
    
  }
}
