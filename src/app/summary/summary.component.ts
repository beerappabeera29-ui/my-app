import { Component } from '@angular/core';
import { ReeService } from '../ree.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  
  count:number=0;
  constructor(private reeservivce:ReeService){
    reeservivce.getcount().subscribe(
      (data:number)=>{
        this.count=data;
      }
    )
  }
}
