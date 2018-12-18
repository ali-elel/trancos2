import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Warranty } from '../model/warranty';
const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class WarrantyService {
  constructor(private http: HttpClient, private router: Router) { }

  getWarranty() {
    return this.http.post(environment.url + 'transfer/getGarantia',
      httpOptionsUrl).pipe(map((res: Warranty) => {
        if (res.ars.length === 0 || res.ars === null) {
          res.ars = {
            utilizado: 0,
            proyectado: 0,
            capacidad: 0,
            excedido: 0
          };
        }
        if (res.usd.length === 0 || res.usd === null) {
          res.usd = {
            utilizado: 0,
            proyectado: 0,
            capacidad: 0,
            excedido: 0
          };
        }
        return res;
      }));
  }
}
