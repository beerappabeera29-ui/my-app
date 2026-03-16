import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  term:string="";
  column:string="";
  order:string="";
  page:number=1;
 
account:any=[];

  constructor(private accountservice:AccountService){
    this.getaccountwithqueryparams();
  }

  getaccountwithqueryparams(){
    this.accountservice.getaccountwithqueryparams(this.term,this.column,this.order,this.page).subscribe(
      (data:any)=>{
        this.account=data;
        console.log(data)
      },
      (err:any)=>{
        alert('issue')
      }
    )
  }
  search(){
    this.getaccountwithqueryparams();
  }
  isAsc:boolean=false;
  sort(column:string){
    this.column=column;

    this.isAsc=!this.isAsc;
    this.order=this.isAsc?'asc':'desc';

    this.getaccountwithqueryparams();
  }

  pageaccount(page:number){
    this.page=page;

    this.getaccountwithqueryparams();
  }

  deleteaccount(id:string){


  this.accountservice.deleteaccount(id).subscribe((data:any)=>{
    this.account=data;
        console.log(data)
        location.reload()
        alert(data.id )
      },
      (err:any)=>{
        alert('error')
      }
    )
  }
}
    