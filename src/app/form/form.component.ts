import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

registerForm = new FormGroup({
  name : new FormControl("",[Validators.required
  ]),
  gender: new FormControl("",[Validators.required]),
  mobilenumber: new FormControl("",[Validators.required]),
  course: new FormControl("",[Validators.required])
})


registerSubmited(){
  //debugger
  this.authService.registerForm([
    this.registerForm.value.name,
    this.registerForm.value.gender,
    this.registerForm.value.mobilenumber,
    this.registerForm.value.course,
    
  ]).subscribe(
    res =>{
      
       alert("submitted");
      }
    
  );
  }

  get Name(): FormControl{
    return this.registerForm.get('name') as FormControl;
  }
  get Gender(): FormControl{
    return this.registerForm.get('gender') as FormControl;
  }
  get MobileNumber(): FormControl{
    return this.registerForm.get('mobilenumber') as FormControl;
  }

  get Course(): FormControl{
    return this.registerForm.get('course') as FormControl;
  }

}
