import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() { }

  ngOnInit() {
    this.options = {
      displayGrid: 'onDrag&Resize',
      draggable: { enabled: true },
      gridType: 'fit',
      maxRows: 7,
      maxCols: 8,
      pushItems: true
    };

    this.dashboard = [
      { cols: 2, rows: 2, y: 0, x: 0, type: 'ingresadas-recibidas-total' },
      { cols: 2, rows: 2, y: 0, x: 2, type: 'ingresadas-recibidas-pendiente' },
      { cols: 2, rows: 2, y: 0, x: 4, type: 'ingresadas-recibidas-procesado' },
      { cols: 2, rows: 2, y: 0, x: 6, type: 'ingresadas-recibidas-rechazado' },

      { cols: 4, rows: 2, y: 1, x: 0, type: 'multi-bullet-warranty' },
      { cols: 4, rows: 2, y: 1, x: 4, type: 'multi-bullet-process' },
      { cols: 4, rows: 3, y: 3, x: 0, type: 'multi-graph' },
      { cols: 4, rows: 3, y: 3, x: 4, type: 'table' },
    ];
  }
}
