import { Component, OnInit, Input } from '@angular/core';
import { GraphBulletOptions } from 'src/app/components/graph-bullet/graph-bullet.component';
import { WarrantyService } from '../../services/warranty.service';
import { ProcessService } from '../../services/process.service';

import { Warranty } from 'src/app/model/warranty';
import { Process } from 'src/app/model/process';

@Component({
  selector: 'app-multi-bullet',
  templateUrl: './multi-bullet.component.html',
  styleUrls: ['./multi-bullet.component.scss']
})
export class MultiBulletComponent implements OnInit {

  @Input() type: string;
  @Input() label: string;
  bullet1: GraphBulletOptions;
  bullet2: GraphBulletOptions;
  loading = false;

  warranty: Warranty;
  constructor(
    private _WarrantyService: WarrantyService,
    private _ProcessService: ProcessService,
  ) {

  }

  ngOnInit() {
    this.getWarrantyProcess();
  }

  getWarrantyProcess() {
    if (this.type === 'warranty') {
      this._WarrantyService.getWarranty()
        .subscribe((res: Warranty) => {
          this.bullet1 = {
            name: 'PESOS',
            vertical: false,
            segments: {
              used: {
                text: 'Utilizado',
                value: res.ars.utilizado,
                currency: 'ARS',
                backgroundColor: '#5D95FF'
              },
              proyected: {
                text: 'Proyectado',
                value: res.ars.proyectado,
                currency: 'ARS',
                backgroundColor: '#8FB4FF'
              },
              available: {
                text: 'Disponible',
                value: res.ars.capacidad,
                currency: 'ARS',
                backgroundColor: '#E9F0FF'
              },
              exceded: {
                text: 'Excedido',
                value: res.ars.excedido,
                currency: 'ARS',
                backgroundColor: '#0066FF'
              }
            }
          };
          this.bullet2 = {
            name: 'DÓLARES',
            vertical: false,
            segments: {
              used: {
                text: 'Utilizado',
                value: res.usd.utilizado,
                currency: 'USD',
                backgroundColor: '#5D95FF'
              },
              proyected: {
                text: 'Proyectado',
                value: res.usd.proyectado,
                currency: 'USD',
                backgroundColor: '#8FB4FF'
              },
              available: {
                text: 'Disponible',
                value: res.usd.capacidad,
                currency: 'USD',
                backgroundColor: '#E9F0FF'
              },
              exceded: {
                text: 'Excedido',
                value: res.usd.excedido,
                currency: 'USD',
                backgroundColor: '#0066FF'
              }
            }
          };
          this.loading = true;
        });
    } else if (this.type === 'process') {
      this._ProcessService.getProcess()
        .subscribe((res: Process) => {
          this.bullet1 = {
            name: 'INTERBANKING',
            vertical: false,
            segments: {
              used: {
                text: 'Utilizado',
                value: res.interbankingTxs.utilizado,
                currency: 'ARS',
                backgroundColor: '#00CBD2'
              },
              proyected: {
                text: 'Proyectado',
                value: 0,
                currency: 'ARS',
                backgroundColor: '#8FB4FF'
              },
              available: {
                text: 'Disponible',
                value: res.interbankingTxs.capacidad,
                currency: 'ARS',
                backgroundColor: '#E3F8F9'
              },
              exceded: {
                text: 'Excedido',
                value: res.interbankingTxs.exceded,
                currency: 'ARS',
                backgroundColor: '#00B5BE'
              }
            }
          };
          this.bullet2 = {
            name: 'BCRA',
            vertical: false,
            segments: {
              used: {
                text: 'Utilizado',
                value: res.bcraTxs.utilizado,
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
                value: res.bcraTxs.capacidad,
                currency: 'ARS',
                backgroundColor: '#F9ECF0'
              },
              exceded: {
                text: 'Excedido',
                value: res.bcraTxs.excedido,
                currency: 'ARS',
                backgroundColor: '#C14978'
              }
            }
          };
          this.loading = true;
        });
    }
  }
}