import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  forms: any;
 

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getAllForms().subscribe(response =>
      {
      this.forms = response;
      }
    );
  }

}
