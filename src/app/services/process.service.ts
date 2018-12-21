import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Process } from '../model/process';
const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  constructor(private http: HttpClient, private router: Router) { }
  getProcess() {
    return this.http.post(environment.url + 'transfer/getCapacidad',
      httpOptionsUrl).pipe(map((res: Process) => {
        if (res.bcraTxs.length === 0 || res.bcraTxs === null) {
          res.bcraTxs = {
            utilizado: 0,
            capacidad: 0,
            excedido: 0
          };
        }
        if (res.interbankingTxs.length === 0 || res.interbankingTxs === null) {
          res.interbankingTxs = {
            utilizado: 0,
            capacidad: 0,
            excedido: 0
          };
        }
        return res;
      }));
  }
}
