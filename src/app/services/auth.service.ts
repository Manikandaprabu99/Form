import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core";

import { map, Observable } from "rxjs";
import { Form } from "../Model/form.model";


@Injectable({
    providedIn: 'root'
  })

  export class AuthService{
    
readonly APIURL = "https://localhost:7227/"

    constructor(private http: HttpClient) {}
    
    registerForm(user: Array<string| null | undefined>){
        return  this.http.post(this.APIURL + "api/Form",
        {
          Name: user[0],
          Gender: user[1],
          MobileNumber: user[2],
          Course: user[3],
        }, {
          responseType: 'text',
      });
      }

       getAllForms(): Observable<Form[]> {
        return this.http.get<Form[]>(this.APIURL + "api/Form");
    }

    AdminLogin(loginInfo: Array<string |null| undefined>){
      return this.http.post(
        this.APIURL + "api/Form/AdminLogin",
        {
        Email:loginInfo[0],
        Pwd:loginInfo[1],
      },
        {
          responseType:'text',
        }
        );
      }


  
  }