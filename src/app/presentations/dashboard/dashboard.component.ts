import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

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
      { cols: 2, rows: 3, y: 1, x: 2, type: 'expanded-rosa'},
      { cols: 2, rows: 3, y: 1, x: 4, type: 'expanded' },
      { cols: 2, rows: 3, y: 1, x: 6, type: 'expanded' },

      { cols: 4, rows: 2, y: 1, x: 0, type: 'process' },
      { cols: 4, rows: 2, y: 1, x: 5, type: 'process-2' },
     /* { cols: 4, rows: 1, y: 2, x: 0, type: 'process-3' },
      { cols: 4, rows: 1, y: 2, x: 5, type: 'process-4' },*/

      { cols: 4, rows: 1, y: 2, x: 0, type: 'graph1' },      
      { cols: 4, rows: 3, y: 2, x: 5, type: 'table' },
      { cols: 4, rows: 1, y: 2, x: 0, type: 'graph2' },
    ];
  }
 }
