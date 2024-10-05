import { Component,OnInit,inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
//2 array 
reciepe:any[]=[]

//3 inject service
service=inject(ApiService)

  //1 step onit  import and implement
   ngOnInit(): void {
    //step 4
    this.service.getapi().subscribe((res:any)=>{
      this.reciepe=res.recipes
    })
     
   }
}
