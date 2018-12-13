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
   return this.http.post(environment.url+'transfer/emitidas/getIngresado',
    {
      sucursal : "",
      segmento : "",
      producto : "",
      canal : "",
      camara : "",
      fechaDesde : "2018-11-14T00:00:00Z",
      fechaHasta : "2018-11-15T23:59:59.59Z"
    },

    httpOptionsUrl);

   }

  getPendiente(): Observable<any> {
    return this.http.post(environment.url+'transfer/emitidas/getPendiente',
    {
      sucursal : "",
      segmento : "",
      producto : "",
      canal : "",
      camara : "",
      fechaDesde : "2018-11-14T00:00:00Z",
      fechaHasta : "2018-11-15T23:59:59.59Z"
    },

    httpOptionsUrl);

  }

  getRechazado(): Observable<any> {
    return this.http.post(environment.url+'transfer/emitidas/getRechazado',
    {
      sucursal : "",
      segmento : "",
      producto : "",
      canal : "",
      camara : "",
      fechaDesde : "2018-11-14T00:00:00Z",
      fechaHasta : "2018-11-15T23:59:59.59Z"
    },

    httpOptionsUrl);

  }

  getProcesado(): Observable<any> {
    return this.http.post(environment.url+'transfer/emitidas/getProcesado',
    {
      sucursal : "",
      segmento : "",
      producto : "",
      canal : "",
      camara : "",
      fechaDesde : "2018-11-14T00:00:00Z",
      fechaHasta : "2018-11-15T23:59:59.59Z"
    },

    httpOptionsUrl);
}
}