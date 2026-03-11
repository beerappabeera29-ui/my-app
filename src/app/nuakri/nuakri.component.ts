import { Component } from '@angular/core';
import { NuakriService } from '../nuakri.service';

@Component({
  selector: 'app-nuakri',
  templateUrl: './nuakri.component.html',
  styleUrls: ['./nuakri.component.css']
})
export class NuakriComponent {

  nuakri:any=[];

constructor(private nuakriservice:NuakriService){
  nuakriservice.getnuakri().subscribe(
    (data:any)=>{
      this.nuakri=data;
      console.log(data)
    },
    (err:any)=>{
      alert('not available data here')
    }
    )
  
}


}
