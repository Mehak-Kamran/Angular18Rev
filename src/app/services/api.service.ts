import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //1 http inject
  http=inject(HttpClient)

  //2 create a function
  getapi(): Observable <any>{
    return this.http.get('https://dummyjson.com/recipes')
  }
}
