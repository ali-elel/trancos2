import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

 
const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class EmitidasService {
  prueba:any;
  constructor(private http: HttpClient, private router: Router) { }

  getBaja(): Observable<any> {
    this.prueba=this.http.get('http://jsonplaceholder.typicode.com/users');
    //console.log("En el servicio",this.prueba);
    return (this.prueba);     
  }
  

}


 