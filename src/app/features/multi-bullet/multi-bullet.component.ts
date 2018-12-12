import { Component, OnInit, Input } from '@angular/core';
import { GraphBulletOptions } from 'src/app/components/graph-bullet/graph-bullet.component';

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

  constructor() { }

  ngOnInit() {

    if (this.type === 'process') {
      this.bullet1 = {
        name: 'INTERBANKING',
        vertical: false,
        segments: {
          used: {
            text: 'Utilizado',
            value: 1000,
            currency: 'ARS',
            backgroundColor: '#00CBD2'
          },
          proyected: {
            text: 'Proyectado',
            value: 12000,
            currency: 'ARS',
            backgroundColor: '#8FB4FF'
          },
          available: {
            text: 'Disponible',
            value: 20000,
            currency: 'ARS',
            backgroundColor: '#E3F8F9'
          },
          exceded: {
            text: 'Excedido',
            value: 0,
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
            value: 400000,
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
            value: 1000000,
            currency: 'ARS',
            backgroundColor: '#F9ECF0'
          },
          exceded: {
            text: 'Excedido',
            value: 0,
            currency: 'ARS',
            backgroundColor: '#C14978'
          }
        }
      };
    } else if (this.type === 'warranty') {
      this.bullet1 = {
        name: 'PESOS',
        vertical: false,
        segments: {
          used: {
            text: 'Utilizado',
            value: 1900,
            currency: 'ARS',
            backgroundColor: '#5D95FF'
          },
          proyected: {
            text: 'Proyectado',
            value: 5000,
            currency: 'ARS',
            backgroundColor: '#8FB4FF'
          },
          available: {
            text: 'Disponible',
            value: 0,
            currency: 'ARS',
            backgroundColor: '#E9F0FF'
          },
          exceded: {
            text: 'Excedido',
            value: 300,
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
            value: 2000,
            currency: 'USD',
            backgroundColor: '#53C984'
          },
          proyected: {
            text: 'Proyectado',
            value: 60000,
            currency: 'USD',
            backgroundColor: '#9DDDB3'
          },
          available: {
            text: 'Disponible',
            value: 1000000,
            currency: 'USD',
            backgroundColor: '#DAF2E1'
          },
          exceded: {
            text: 'Excedido',
            value: 0,
            currency: 'USD',
            backgroundColor: '#00BB63'
          }
        }
      };
    }

  }

}
