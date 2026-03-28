import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  badseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private httpClient: HttpClient) { }

  getvehicle(): Observable<any> {
    return this.httpClient.get(this.badseUrl+"?limit=10&page=1");
  }
  getvehicles(id:string): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(this.badseUrl+"/"+id);
  }

  filtervehicle(term:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.badseUrl+"?filter="+term);
  }

  
  pagevehicle(page:number):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.badseUrl+"?limit=10&page="+page);
  }
  sortvehicle(column:string,order:string):Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(this.badseUrl+"?sortby="+column+"&order="+order);
  }


  deletevehicle(id: string): Observable<Vehicle> {
    return this.httpClient.delete<Vehicle>(this.badseUrl+"/" + id)
  }

    getvehiclewithqueryparams(term:string,column:string,order:string,page:number): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(this.badseUrl+"?filter="+term+"&sortby="+column+"&order="+order+"&limit=10&page="+page )
  }

createvehicle(vehicle:any): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>(this.badseUrl,vehicle);
  }

editvehicle(id:string,vehicle:any): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(this.badseUrl+"/"+id,vehicle);
  }
}
