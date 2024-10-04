import { Component } from '@angular/core';
import { RoleComponent } from '../role/role.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RoleComponent,DesignationComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  //directive
  //structural(ngIf)
  state:string="designation"

  switch(tab:string){
    this.state=tab
  }

}