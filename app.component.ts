import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoleComponent } from './components/role/role.component';
import { DesignationComponent } from './components/designation/designation.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RoleComponent,DesignationComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}
