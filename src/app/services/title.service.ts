import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = '';
  login = true;
  constructor() { }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }
  setLogin(login: boolean) {
    this.login = login;
  }
}
