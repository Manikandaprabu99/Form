import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[
      Validators.required]),
    });
    loginSubmitted(){
      this.authService.AdminLogin(
       [this.loginForm.value.email,
        this.loginForm.value.pwd]).subscribe((res)=> {
        
          alert("login Successful");
         this.router.navigate(["/View"]);
         });
    }
  
    get Email(): FormControl{
      return this.loginForm.get('email') as FormControl;
    }
  
    get PWD(): FormControl{
      return this.loginForm.get('pwd') as FormControl;
    }
  }
