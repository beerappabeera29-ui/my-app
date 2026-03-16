import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

movies:any[]=[];

 constructor(private movieservice:MovieService){
  movieservice.getmovie().subscribe(
    (data:any)=>{
      this.movies=data.data;
      console.log(data)
    },
    (err:any)=>{
      alert("this data not availabl")
    }
  )
 }

}
