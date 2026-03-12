import { Component } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

movie:any=[];

 constructor(private movieservice:MovieService){
  movieservice.getmovie().subscribe(
    (data:any)=>{
      this.movie=data;
      console.log(data)
    },
    (err)=>{
      alert("this data not availabl")
    }
  )
 }

}
