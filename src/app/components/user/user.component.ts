import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // interpolation
  name:string="mehak"
  //prperty binding
  ty:string="enter your city"
  //two way binding ,import form module
  country:string="pakistan"
  //event binding
  givealert(){
    alert("hello");

  }
  //directive structural ngif import common module 
  state:string=""
   //func
   decision(clicked:string){
    this.state=clicked
   }



}
