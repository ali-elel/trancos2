import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter-bala',
  templateUrl: './meter-bala.component.html',
  styleUrls: ['./meter-bala.component.scss']
})
export class MeterBalaComponent implements OnInit {
  loading = true;
  constructor() { }

  ngOnInit() {
    this.getMeterBalaData();
  }

  getMeterBalaData() {

    /*
    forkJoin(
    this.servicio.get1(),
    this.servicio.get2(),
    this.servicio.get3(),
    this.servicio.get4()
    ).subscribe([res1, res2, res3, res4]) => {
      res1 tal cosa
      res2 
      ...
    }, err => {},
    () => {
getmetrba..();    }
    ForkJoin
    */

    this.loading = false;

  }
}
