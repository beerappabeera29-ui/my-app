import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NuakriService {

  constructor(private httpclient:HttpClient) { }
  getnuakri():Observable<any>{
    return this.httpclient.get('https://jsonfakery.com/jobs')
  }
}
