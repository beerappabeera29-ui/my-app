import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  cartcount:number = 0;

  // create
  cartcountSub:BehaviorSubject<number>=new BehaviorSubject(0);

// set
setcount(){
  this.cartcount++;
  this.cartcountSub.next(this.cartcount);
}
 
// get
getcount(){
  return this.cartcountSub.asObservable();
}

  constructor() { }
}
