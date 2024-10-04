import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  //1 http inject
  http=inject(HttpClient);


//create api function 
getdesig():Observable<any>{
   
 return this.http.get ("https://dummyjson.com/users")
}

}
