import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
//data binding
//interpolation
name:string="Angular 18"
//property binding
val:string="write you name"
ty:string="text"
//two way binding
//for 2 way binding we have to import form module
oldage:number=23

//event binding
displayms(){
  alert("hello")
}

displaymsg(message:string){
   alert(message)
}


}
