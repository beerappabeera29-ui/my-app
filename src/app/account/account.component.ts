import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
account:any=[];

  constructor(private accountservice:AccountService){
    accountservice.getaccount().subscribe(
      (data:any)=>{
        this.account=data;
        console.log(data);
      },
      (err:any)=>{
        alert("not downlode api")
      }
    )
  }
}
