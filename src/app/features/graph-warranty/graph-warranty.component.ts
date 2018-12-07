import { GraphBulletOptions } from './../../components/graph-bullet/graph-bullet.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-warranty',
  templateUrl: './graph-warranty.component.html',
  styleUrls: ['./graph-warranty.component.scss']
})
export class GraphWarrantyComponent implements OnInit {

  graphWarrantyOptions: GraphBulletOptions = {
    name: '',
    vertical: true,
    segments: {
      used: {
        text: 'Utilizado',
        value: 400000,
        currency: 'ARS',
        backgroundColor: '#5D95FF'
      },
      proyected: {
        text: 'Proyectado',
        value: 500000,
        currency: 'ARS',
        backgroundColor: '#8FB4FF'
      },
      available: {
        text: 'Disponible',
        value: 1000000,
        currency: 'ARS',
        backgroundColor: '#E9F0FF'
      },
      exceded: {
        text: 'Excedido',
        value: 0,
        currency: 'ARS',
        backgroundColor: '#0066FF'
      }
    }
  };

  graphWarranty2Options: GraphBulletOptions = {
    name: '',
    segments: {
      used: {
        text: 'Utilizado',
        value: 400000,
        currency: 'ARS',
        backgroundColor: '#5D95FF'
      },
      proyected: {
        text: 'Proyectado',
        value: 500000,
        currency: 'ARS',
        backgroundColor: '#8FB4FF'
      },
      available: {
        text: 'Disponible',
        value: 1000000,
        currency: 'ARS',
        backgroundColor: '#E9F0FF'
      },
      exceded: {
        text: 'Excedido',
        value: 0,
        currency: 'ARS',
        backgroundColor: '#0066FF'
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
