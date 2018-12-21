import { ProcessService } from './../../services/process.service';
import { Process } from 'src/app/model/process';
import { GraphBulletOptions } from './../../components/graph-bullet/graph-bullet.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-process',
  templateUrl: './graph-process.component.html',
  styleUrls: ['./graph-process.component.scss']
})
export class GraphProcessComponent implements OnInit {
  graphINTBKOptions2: GraphBulletOptions;
  graphBCRAOptions2: GraphBulletOptions;

  graphINTBKOptions: GraphBulletOptions = {
    name: 'INTBK',
    vertical: true,
    segments: {
      used: {
        text: 'Utilizado',
        value: 1000,
        backgroundColor: '#00CBD2',
        currency: 'USD'

      },
      proyected: {
        text: 'Proyectado',
        value: 0,
        backgroundColor: '#8FB4FF',
        currency: 'USD'
      },
      available: {
        text: 'Disponible',
        value: 3000,
        backgroundColor: '#E3F8F9',
        currency: 'USD'
      },
      exceded: {
        text: 'Excedido',
        value: 0,
        backgroundColor: '#00B5BE',
        currency: 'USD'
      }
    }
  };

  graphBCRAOptions: GraphBulletOptions = {
    name: 'BCRA',
    vertical: true,
    segments: {
      used: {
        text: 'Utilizado',
        value: 25000, currency: 'ARS',
        backgroundColor: '#D988A7'
      },
      proyected: {
        text: 'Proyectado',
        value: 0, currency: 'ARS',
        backgroundColor: '#8FB4FF'
      },
      available: {
        text: 'Disponible',
        value: 20000, currency: 'ARS',
        backgroundColor: '#F9ECF0'
      },
      exceded: {
        text: 'Excedido', currency: 'ARS',
        value: 0,
        backgroundColor: '#C14978'
      }
    }
  };

  constructor(
    private _ProcessService: ProcessService,
    ) { }

  ngOnInit() {
    this.getProcess();
  }

  getProcess() {
    this._ProcessService.getProcess()
      .subscribe((res: Process) => {
        this.graphINTBKOptions2 = {
          name: 'BCRA',
          vertical: true,
          segments: {
            used: {
              text: 'Utilizado',
              value: res.interbankingTxs.utilizado,
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
              value: res.interbankingTxs.capacidad,
              currency: 'ARS',
              backgroundColor: '#F9ECF0'
            },
            exceded: {
              text: 'Excedido',
              value: res.interbankingTxs.excedido,
              currency: 'ARS',
              backgroundColor: '#C14978'
            }
          }
        };

        this.graphBCRAOptions2 = {
          name: 'BCRA',
          vertical: true,
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
        console.log('graphBCRAOptions2', this.graphBCRAOptions2);
        console.log('graphINTBKOptions2', this.graphINTBKOptions2);

      },
      error => {
          console.log(error);
        },
        () => {
          // console.log('completo-procesamiento');
          // this.getWarrantyWarranty();
        });
  }
}
