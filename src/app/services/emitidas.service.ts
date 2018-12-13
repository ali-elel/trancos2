import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Emitted } from '../model/emitted';

const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class EmitidasService {

  totalValueARS: number;
  constructor(private http: HttpClient, private router: Router) {

  }

  getBaja(): Observable<any> {
    return this.http.post(environment.url + 'transfer/emitidas/getBaja',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl)

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
      httpOptionsUrl).pipe(map((res: Emitted) => {

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
    let url = 'transfer/emitidas/';
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
    return this.http.post(environment.url + 'transfer/emitidas/getIngresado',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl);

  }

  getDdif(): Observable<any> {
    return of(this.http.post(environment.url + 'transfer/emitidas/getDdif',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl));

  }

  getPendiente(): Observable<any> {
    return this.http.post(environment.url + 'transfer/emitidas/getPendiente',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl);


  }

  getRechazado(): Observable<any> {
    return this.http.post(environment.url + 'transfer/emitidas/getRechazado',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl);
    // asi es como va desde el endpoint
    //this.emitidas_detalle=this.http.get('http://jsonplaceholder.typicode.com/users');

    //console.log("En el servicio",this.prueba);

    // Cuando viene de un json interno se debe agregar 
    // of para hacerlo un observable ya que el json en si 
    // no es un observable esto es a partir de angular 7
    // return of(this.emitidas);

  }

  getProcesado(): Observable<any> {
    return this.http.post(environment.url + 'transfer/emitidas/getProcesado',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl);

  }

  getPendEmisionPago(): Observable<any> {
    return this.http.post(environment.url + 'transfer/emitidas/getPendEmisionPago',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl);

  }

  get7x24(): Observable<any> {
    return this.http.post(environment.url + 'transfer/emitidas/get7x24',
      {
        sucursal: "",
        segmento: "",
        producto: "",
        canal: "",
        camara: "",
        fechaDesde: "2018-11-14T00:00:00Z",
        fechaHasta: "2018-11-15T23:59:59.59Z"
      },

      httpOptionsUrl);
  }

}


