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
export class FilterSegmentosService {
   selectedSegmentsCodes: string[];

  constructor(private http: HttpClient, private router: Router) { }
  get(type: string, sucursales: any[]) {
      // if (sucursales.length > 0 ) {
      // for (let i = 0; i <= sucursales.length ; i++) {
      //     this.selectedSegmentsCodes.push(sucursales[i]['code']);
         console.log('this.selectedOfficesCodes', sucursales);
      // }
      // }

    return this.http.post(environment.url + this.buildUrl(type),
      {
        sucursal: sucursales,
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
    let url = 'filters/';
    switch (type) {
      case 'dashboard':
        url += 'dashboard/segmentos';
        break;
      case 'emitidas':
        url += 'emitidas/segmentos';
        break;
      case 'recibidas':
        url += 'recibidas/segmentos';
        break;
      case 'pagos':
        url += 'pagos/segmentos';
        break;

      default:
        break;
    }
    return url;
  }
}
