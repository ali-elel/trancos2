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

  constructor() { }

  ngOnInit() {
    this.options = {
      displayGrid: 'onDrag&Resize',
      draggable: { enabled: true },
      maxRows: 6,
      maxCols: 8,
      pushItems: true
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 6, type: 'mini' },
      { cols: 2, rows: 1, y: 0, x: 4, type: 'mini' },
      { cols: 2, rows: 1, y: 0, x: 2, type: 'mini' },
      { cols: 2, rows: 1, y: 0, x: 0, type: 'mini' },


      { cols: 4, rows: 2, y: 1, x: 0, type: 'multi-bullet-warranty' },
      { cols: 4, rows: 2, y: 1, x: 4, type: 'multi-bullet-process' },
      { cols: 4, rows: 3, y: 3, x: 0, type: 'graph' },
      { cols: 4, rows: 3, y: 3, x: 4, type: 'table' },
    ];
  }
}
