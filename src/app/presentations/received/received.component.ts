import { GridsterItem, GridsterConfig } from 'angular-gridster2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() { }

  ngOnInit() {
    this.options = {
      displayGrid: 'onDrag&Resize',
      draggable: { enabled: true },
      maxRows: 7,
      maxCols: 8,
      pushItems: true
    };

    this.dashboard = [
      { cols: 2, rows: 3, y: 0, x: 0, type: 'expanded' },
      { cols: 2, rows: 3, y: 0, x: 2, type: 'expanded-rosa' },
      { cols: 2, rows: 3, y: 0, x: 4, type: 'expanded' },
      { cols: 2, rows: 3, y: 0, x: 6, type: 'expanded' },

      { cols: 5, rows: 1, y: 3, x: 0, type: 'process' },
      { cols: 3, rows: 1, y: 3, x: 5, type: 'process-2' },
      { cols: 4, rows: 3, y: 4, x: 0, type: 'graph' },
      { cols: 4, rows: 3, y: 4, x: 5, type: 'table' },
    ];
  }
}