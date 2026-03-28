import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getaccount():Observable<any>{
   return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  
  getaccounts(id:string):Observable<any>{
   return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
  }


  getaccountwithqueryparams(term:string,column:string,order:string,page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page)
  }

  deleteaccount(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/" +id)
  }


  createaccount(account:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",account )
  }


  editaccount(id:string, account:any):Observable<any>{
    return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,account )
  }

}
