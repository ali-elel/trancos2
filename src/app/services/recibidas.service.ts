import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Emitted } from '../model/emitted';
import { Receive } from '../model/receive';
const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class RecibidasService {
   totalValueARS: number;

  constructor(private http: HttpClient, private router: Router) { 

  }

  get(type: string) {
    return this.http.post(environment.url + this.buildUrl(type),
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },
      httpOptionsUrl).pipe(map((res: Receive) => {
        
        if (res.amountARS.length === 0) {
          res.amountARS = [{
            amount: 0,
            count: 0,
            detail: ''
          }];
        }
        if (res.amountUSD.length === 0) {
          res.amountUSD = [{
            amount: 0,
            count: 0,
            detail: ''
          }];
        }
        if (type === 'Total') {
          this.totalValueARS = res.amountARS[0].amount;
        } else {
          res.percent = Math.round(res.amountARS[0].amount * 100 / this.totalValueARS);
          if (Number.isNaN(res.percent)) {
            res.percent = 0;
          }
        }
        return res;
      }));;
  }

  buildUrl(type: string): string {
    let url = 'transfer/recibidas/';
    switch (type) {
      case 'Total':
        url += 'getIngresado';
        break;
      case 'Pendiente':
        url += 'getPendiente';
        break;
      case 'Procesado':
        url += 'getProcesado';
        break;
      case 'Rechazado':
        url += 'getRechazado';
        break;

      default:
        break;
    }
    return url;
  }


  getIngresado(): Observable<any> {    
   return this.http.post(environment.url+'transfer/recibidas/getIngresado',
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
    return this.http.post(environment.url+'transfer/recibidas/getPendiente',
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
    return this.http.post(environment.url+'transfer/recibidas/getRechazado',
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
    return this.http.post(environment.url+'transfer/recibidas/getProcesado',
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