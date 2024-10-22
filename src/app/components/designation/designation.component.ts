import { Component,OnInit,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  // 4 decl var
  dlist:IRole[]=[]
 //3 inject master service
  masterService=inject(MasterService)
// 5 
  ngOnInit(): void {
    this.masterService.getdesig().subscribe((res:any)=>{
      this.dlist=res.users
      console.log(res)
    }
  )
  }


















// //data binding
// //interpolation
// name:string="Angular 18"
// //property binding
// val:string="write you name"
// ty:string="text"
// //two way binding
// //for 2 way binding we have to import form module
// oldage:number=23

// //event binding
// displayms(){
//   alert("hello")
// }

// displaymsg(message:string){
//    alert(message)
// }


}
