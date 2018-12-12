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
export class RecibidasService {
  recibidas: any;
  recibidas_detalle: any;

  constructor(private http: HttpClient, private router: Router) { 

  }

  getIngresado(): Observable<any> {
    this.recibidas="";
    this.recibidas_detalle="";

    this.recibidas = [
      {
        "amountARS": {
          "amount": "12000.0",
          "count": "120"
        },
        "amountUSD": {
          "amount": "300",
          "count": "40"
        },
        "errorMessage": null
      }
    ];

    this.recibidas_detalle = {
      "amountARS": [
        {
          "amount": "34000.0",
          "count": "31",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "1378.0",
          "count": "3",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.recibidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.recibidas);

  }

  getPendiente(): Observable<any> {
    this.recibidas="";
    this.recibidas_detalle="";

    this.recibidas = [
      {
        "amountARS": {
          "amount": "12000",
          "count": "120"
        },
        "amountUSD": {
          "amount": "87600.0",
          "count": "76"
        },
        "errorMessage": null
      }
    ];

    this.recibidas_detalle = {
      "amountARS": [
        {
          "amount": "7500.0",
          "count": "5",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "34000.0",
          "count": "83",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.recibidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    // console.log("En el servicio",this.recibidas);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.recibidas);

  }

  getRechazado(): Observable<any> {
    this.recibidas="";
    this.recibidas_detalle="";

    this.recibidas = [
      {
        "amountARS": {
          "amount": "0",
          "count": "0"
        },
        "amountUSD": {
          "amount": "50000.0",
          "count": "140"
        },
        "errorMessage": null
      }
    ];

    this.recibidas_detalle = {
      "amountARS": [
        {
          "amount": "66500.0",
          "count": "145",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "79300.0",
          "count": "93",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.recibidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    
    return of(this.recibidas);

  }

  getProcesado(): Observable<any> {
    this.recibidas="";
    this.recibidas_detalle="";

    this.recibidas = [
      {
        "amountARS": {
          "amount": "0",
          "count": "0"
        },
        "amountUSD": {
          "amount": "44400.0",
          "count": "450"
        },
        "errorMessage": null
      }
    ];

    this.recibidas_detalle = {
      "amountARS": [
        {
          "amount": "5000.0",
          "count": "1",
          "detail": "Sucursales"
        }
      ],
      "amountUSD": [
        {
          "amount": "13600.0",
          "count": "143",
          "detail": "Sucursales"
        }
      ],
      "errorMessage": null
    }
     // asi es como va desde el endpoint
    //this.recibidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    return of(this.recibidas);

  }
}