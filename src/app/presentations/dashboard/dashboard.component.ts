import { GraphBulletOptions } from './../../components/graph-bullet/graph-bullet.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  @ViewChild('lineChart') chartRef;
  chart: any;
  graphWarrantyOptions: GraphBulletOptions = {
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

  //   [17:27, 21/11/2018] Fede Colombo: GARANTIA EN PESOS
  // Utilizado: #5D95FF
  // Proyectado: #8FB4FF
  // Disponible: #E9F0FF
  // Excedido: #0066FF

  // [17:30, 21/11/2018] Fede Colombo: GARANTIA EN DOLARES
  // Utilizado: #53C984
  // Proyectado: #9DDDB3
  // Disponible: #DAF2E1
  // Excedido: #00BB63

  // [17:42, 21/11/2018] Fede Colombo: PROCESADO INTERBAKING
  // Utilizado: #00CBD2
  // DIsponible: #E3F8F9
  // Excedido: # 00B5BE

  // [17:45, 21/11/2018] Fede Colombo: PROCESADO BCRA
  // Utilizado: #D988A7
  // DIsponible: #F9ECF0
  // Excedido: #C14978

  constructor() { }

  ngOnInit() {
    this.options = {
      displayGrid: 'onDrag&Resize',
      draggable: { enabled: true },
      maxRows: 8,
      maxCols: 8,
      pushItems: true
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 6, type: 'mini' },
      { cols: 2, rows: 1, y: 0, x: 4, type: 'mini' },
      { cols: 2, rows: 1, y: 0, x: 2, type: 'mini' },
      { cols: 2, rows: 1, y: 0, x: 0, type: 'mini' },

      { cols: 2, rows: 3, y: 1, x: 0, type: 'expanded' },
      { cols: 2, rows: 3, y: 1, x: 2, type: 'expanded-rosa' },
      { cols: 2, rows: 3, y: 1, x: 4, type: 'expanded' },
      { cols: 2, rows: 3, y: 1, x: 6, type: 'expanded' },

      { cols: 5, rows: 1, y: 2, x: 0, type: 'process' },
      { cols: 3, rows: 1, y: 2, x: 5, type: 'process-2' },
      { cols: 4, rows: 3, y: 2, x: 0, type: 'graph' },
      { cols: 4, rows: 3, y: 2, x: 5, type: 'table' },
    ];
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12', 'T13', 'T14', 'T15'],
        datasets: [
          {
            label: 'Data 1',
            data: [0, 10, 11, 13, 7, 8, 10, 15, 16, 17, 16, 14, 10, 8, 10],
            borderColor: '#00AEFF',
            fill: false
          },
          {
            label: 'Data 2',
            data: [5, 6, 8, 3, 4, 5, 4, 12, 16, 30, 31, 19, 17, 16, 12],
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        }
      }
    });
  }
}
