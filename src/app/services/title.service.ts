import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title = '';
  constructor() { }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }
}
