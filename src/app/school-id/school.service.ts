import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpclient:HttpClient) { }
  getschool():Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  getschools(id:string):Observable<any>{
    return this.httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }
  createschool(school:any):Observable<any>{
    return this.httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",school)
  }
  editschool(id:string,school:any):Observable<any>{
    return this.httpclient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,school)
  }

  deleteschool(id:string):Observable<any>{
    return this.httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }

  getschoolwithqueryparams(term:string,column:string,order:string,page:number,limit:number):Observable<any>{
 return this.httpclient.get ("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term+"&sortBy="+column+"&order="+order+"&limit="+limit+"&page="+page)
  }
}
