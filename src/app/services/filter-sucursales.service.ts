import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class FilterSucursalesService {
  constructor(private http: HttpClient, private router: Router) { }

  get(type: string) {
    return this.http.post(environment.url + this.buildUrl(type),
      {
        sucursal: [],
        segmento: [],
        producto: [],
        fechaDesde: '2018-12-17T00:00:00Z',
        fechaHasta: '2018-12-17T23:59:59.59Z'
      },
      httpOptionsUrl).pipe(map((res: any) => {
        return res;
      }));
  }


  buildUrl(type: string): string {
    let url = '/filters/';
    switch (type) {
      case 'dashboard':
        url += 'dashboard/sucursales';
        break;
      case 'emitidas':
        url += 'emitidas/sucursales';
        break;
      case 'recibidas':
        url += 'recibidas/sucursales';
        break;
      case 'pagos':
        url += 'pagos/sucursales';
        break;

      default:
        break;
    }
    return url;
  }
}
