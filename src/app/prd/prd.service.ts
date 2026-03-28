import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrdService {

  constructor(private httpclient:HttpClient) { }

  getprd():Observable<any>{
    return this.httpclient.get("https://dummyjson.com/products")
  }

  
   createprd(prd:any):Observable<any>{
     return this.httpclient.post("https://dummyjson.com/products/add",prd)
  }
}
