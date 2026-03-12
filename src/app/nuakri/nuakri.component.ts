import { Component } from '@angular/core';
import { NuakriService } from '../nuakri.service';

@Component({
  selector: 'app-nuakri',
  templateUrl: './nuakri.component.html',
  styleUrls: ['./nuakri.component.css']
})
export class NuakriComponent {

  nuakri:any=[];
  term:string="";
constructor(private nuakriservice:NuakriService){
  nuakriservice.getnuakri().subscribe(
    (data:any)=>{
      this.nuakri=data;
      // console.log(data)
    },
    (err:any)=>{
      alert('not available data here')
    }
    )
  
}
  pagenuakri(page:number){
  this.nuakriservice.pagenuakri(page).subscribe(
    (data:any)=>{
      this.nuakri=data;
      // console.log(data)
    },
    (err:any)=>{
      alert('not available data here')
    }
    )
  }
  filternuakri(){
  this.nuakriservice.filternuakri(this.term).subscribe(
    (data:any)=>{
      this.nuakri=data;
      console.log(this.nuakri)
    },
    (err:any)=>{
      alert('not available data here')
    }
    )
  }


}
