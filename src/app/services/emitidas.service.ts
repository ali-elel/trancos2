import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  totalValueARSGral: number;
  constructor(private http: HttpClient, private router: Router) {

  }

  get(type: string) {
    // alert('get en emitidas service '+ type );
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var fecha = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    return this.http.post(environment.url + this.buildUrl(type),
      {
        sucursal: [],
        segmento: [],
        producto: [],
        canal: [],
        camara: [],
        fechaDesde: '2018-12-17T00:00:00Z',
        fechaHasta: '2018-12-17T23:59:59.59Z'
      },
      httpOptionsUrl).pipe(map((res: Emitted) => {
        // console.log(environmeSnt.url + this.buildUrl(type));
        if (res.amountARSGral !== undefined) {
          if ((res.amountARSGral.length === 0 || res.amountARSGral.amount === null)) {
            res.amountARSGral = {
              amount: 0,
              count: 0,
            };
          }
          if ((res.amountUSDGral.length === 0 || res.amountUSDGral.amount === null)) {
            res.amountUSDGral = {
              amount: 0,
              count: 0,
            };
          }
          if (type === 'Total') {
            this.totalValueARSGral = res.amountARSGral.count + res.amountUSDGral.count;

          } else {
            res.percent = Math.round(((res.amountARSGral.count + res.amountUSDGral.count) / this.totalValueARSGral) * 100);
            if (Number.isNaN(res.percent) || res.percent === 0 || res.percent === Infinity) {
              res.percent = 0;
            }
          }
         } else {
          if ((res.amountARS.length === 0 || res.amountARS.amount === null)) {
            res.amountARS = {
              amount: 0,
              count: 0,
            };
          }
          if ((res.amountUSD.length === 0 || res.amountUSD.amount === null)) {
            res.amountUSD = {
              amount: 0,
              count: 0,
            };
          }
        }
        return res;
      }));
  }

  buildUrl(type: string): string {
    let url = 'transfer/emitidas/';
    switch (type) {
      case 'Total':
        url += 'getIngresado';
        break;
        case 'Ingresado':
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
        case 'Baja':
        url += 'getBaja';
        break;
        case 'Ddif':
        url += 'getDdif';
        break;
        case 'Pendiente emisión de pago':
        url += 'getPendEmisionPago';
        break;
        case '7x24':
        url += 'get7x24';
        default:
        break;
    }
    return url;
  }
}


