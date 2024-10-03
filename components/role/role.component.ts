import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  //string , no , 
  name:string="mehak kamran"
  age:number=23
  input_type:string="radio"

}
