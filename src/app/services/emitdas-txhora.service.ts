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
export class EmitdasTxhoraService {

  constructor(private http: HttpClient, private router: Router) { }
  get(type: string) {
    return this.http.post(environment.url + '/transfer/emitidas/getTxHora',
      {
        moneda: '',
        sucursal: [],
        segmento: [],
        producto: [],
        canal :   [],
        camara :  []
      },
      httpOptionsUrl).pipe(map((res: any) => {
        return res;
      }));
  }
}
