import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class WarrantyService {
  prueba: any;
  recibidas: any;
  recibidas_detalle: any;
  bullet1 : any;
  bullet2 : any;
  
  constructor(private http: HttpClient, private router: Router) { }


  getIngresado(): Observable<any> {
    this.recibidas="";
    this.recibidas_detalle="";

    this.bullet1 = {
      name: 'INTERBANKING',
      vertical: false,
      segments: {
        used: {
          text: 'Utilizado',
          value: 400000,
          currency: 'ARS',
          backgroundColor: '#00CBD2'
        },
        proyected: {
          text: 'Proyectado',
          value: 0,
          currency: 'ARS',
          backgroundColor: '#8FB4FF'
        },
        available: {
          text: 'Disponible',
          value: 1000000,
          currency: 'ARS',
          backgroundColor: '#E3F8F9'
        },
        exceded: {
          text: 'Excedido',
          value: 0,
          currency: 'ARS',
          backgroundColor: '#00B5BE'
        }
      }
    };

    this.bullet2 = {
      name: 'BCRA',
      vertical: false,
      segments: {
        used: {
          text: 'Utilizado',
          value: 400000,
          currency: 'ARS',
          backgroundColor: '#D988A7'
        },
        proyected: {
          text: 'Proyectado',
          value: 0,
          currency: 'ARS',
          backgroundColor: '#8FB4FF'
        },
        available: {
          text: 'Disponible',
          value: 1000000,
          currency: 'ARS',
          backgroundColor: '#F9ECF0'
        },
        exceded: {
          text: 'Excedido',
          value: 0,
          currency: 'ARS',
          backgroundColor: '#C14978'
        }
      }
    };
     // asi es como va desde el endpoint
    //this.recibidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.recibidas);

  }
}
