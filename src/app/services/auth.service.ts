import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(user: string, password: string): Observable<any> {
    return this.http.post(environment.url + '/user/login', { user: user, password: password }, httpOptionsUrl);
  }

  logout() {
    return this.http.post(environment.url + '/user/logout', {}, httpOptionsUrl);
  }

}
