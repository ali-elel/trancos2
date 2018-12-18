import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TitleService],
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private titleService: TitleService) { }

  ngOnInit() {

  }
  logout() {
    this.titleService.setTitle('');
    this.router.navigate(['login']);
  }

}
