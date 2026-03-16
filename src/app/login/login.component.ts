import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform:FormGroup= new FormGroup({
    username:new FormControl(),
    password: new FormControl()
  });

  constructor(private loginservice:LoginService,private router:Router){}
  login(){
    this.loginservice.login(this.loginform.value).subscribe(
      (data:any)=>{
        alert("login success");
         //store tiken
         sessionStorage.setItem("accessToken",data.accessToken);
        //go to dashboard
        this.router.navigateByUrl("/dashboard");
     

      },
      (error:any)=>{
        alert("invalid credentials")
      }
    )
  }
}
