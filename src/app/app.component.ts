
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { UserComponent } from './components/user/user.component';
import { ApiComponent } from './components/api/api.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MasterComponent,UserComponent,ApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}
