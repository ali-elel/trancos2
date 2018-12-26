import { WarrantyService } from './../../services/Warranty.service';
import { GraphBulletOptions } from './../../components/graph-bullet/graph-bullet.component';
import { Component, OnInit } from '@angular/core';
import { Warranty } from 'src/app/model/Warranty';
import { interval, Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-graph-warranty',
  templateUrl: './graph-warranty.component.html',
  styleUrls: ['./graph-warranty.component.scss']
})
export class GraphWarrantyComponent implements OnInit {
  bullet: GraphBulletOptions;
  constructor(
    private _WarrantyService: WarrantyService,

  ) { }

  ngOnInit() {
     this.getWarranty();
  }
  getWarranty() {
    interval(1500)
    .pipe(
      startWith(0),
      switchMap(() =>  this._WarrantyService.getWarranty()))
      .subscribe((res: Warranty) => {
        this.bullet = {
          name: '',
          vertical: true,
          segments: {
            used: {
              text: 'Utilizado',
              value: res.ars.utilizado,
              currency: 'ARS',
              backgroundColor: '#D988A7'
            },
            proyected: {
              text: 'Proyectado',
              value: 10200,
              currency: 'ARS',
              backgroundColor: '#8FB4FF'
            },
            available: {
              text: 'Disponible',
              value: res.ars.capacidad,
              currency: 'ARS',
              backgroundColor: '#F9ECF0'
            },
            exceded: {
              text: 'Excedido',
              value: res.ars.excedido,
              currency: 'ARS',
              backgroundColor: '#C14978'
            }
          }
        };
      },
        error => { },
        () => {
          // console.log('completo-procesamiento');
          // this.getWarrantyWarranty();
        });
  }
}
