import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VoyageService } from 'src/app/voyageServer/voyage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any=[];
  loginForm: FormGroup = new FormGroup( { } );
  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router) { }
  


  
  ngOnInit(): void {
    this.loginForm=this.fb.group({
    email:[''],
     password: [''],
  })

  }
  email:String="hamzakhili46@gmail.com";
  password:String="hamza";

  ///Loginnnn
  login(){
    if(this.loginForm.value.email== this.email &&this.loginForm.value.password== this.password){
      this.route.navigate(['ad'])
     alert("bienvenue sur ta page")
      
    }else{
      alert("Les information Incorrecte")
    }
  }


}
