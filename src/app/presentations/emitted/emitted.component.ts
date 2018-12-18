import { TitleService } from './../../services/title.service';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitted',
  templateUrl: './emitted.component.html',
  styleUrls: ['./emitted.component.scss']
})
export class EmittedComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle('Emitidas');
    this.titleService.setLogin(false);

    this.options = {
      displayGrid: 'onDrag&Resize',
      draggable: { enabled: true },
      maxRows: 8,
      maxCols: 8,
      pushItems: true
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0, type: 'mini-baja' },
      { cols: 2, rows: 1, y: 0, x: 2, type: 'mini-ddif' },
      { cols: 2, rows: 1, y: 0, x: 4, type: 'mini-7x24' },
      { cols: 2, rows: 1, y: 0, x: 6, type: 'mini-pendiente' },

      { cols: 2, rows: 3, y: 1, x: 0, type: 'expanded-ingresado' },
      { cols: 2, rows: 3, y: 1, x: 2, type: 'expanded-pendiente' },
      { cols: 2, rows: 3, y: 1, x: 4, type: 'expanded-procesado' },
      { cols: 2, rows: 3, y: 1, x: 6, type: 'expanded-rechazado' },

      { cols: 5, rows: 1, y: 2, x: 0, type: 'process' },
      { cols: 3, rows: 1, y: 2, x: 5, type: 'process-2' },
      { cols: 4, rows: 3, y: 2, x: 0, type: 'graph' },
      { cols: 4, rows: 3, y: 2, x: 5, type: 'table' },
    ];
  }
}
