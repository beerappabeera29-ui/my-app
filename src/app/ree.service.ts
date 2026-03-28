import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReeService {

  count:number=0;

  //create
  countsub:BehaviorSubject<number>=new BehaviorSubject(0);

  //set 
  setcount(){
    this.count++;
    this.countsub.next(this.count);



    }

  //get
    getcount(){
      return this.countsub.asObservable();
  }
}


