import { GraphBulletOptions } from './../../components/graph-bullet/graph-bullet.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-process',
  templateUrl: './graph-process.component.html',
  styleUrls: ['./graph-process.component.scss']
})
export class GraphProcessComponent implements OnInit {

  graphINTBKOptions: GraphBulletOptions = {
    name: 'INTBK',
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

  constructor() { }

  ngOnInit() {
  }

}
