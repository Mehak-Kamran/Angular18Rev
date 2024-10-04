import { Component,OnInit,inject } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {

//in order to call api i have to do 
//1- http cient in app config file 
//2- import and implement life cycle event on init(when some event trigger only play then)


//get http 
http=inject(HttpClient);
//var 
list:IRole[]=[]
ngOnInit(): void {
  this.getrole();
}

//create api function 
getrole(){
   
  this.http.get("https://dummyjson.com/users").subscribe((res:any)=>{
      this.list=res.users
  })
}





































  // //string , no , 
  // name:string="mehak kamran"
  // age:number=23
  // input_type:string="radio"


  //

}
