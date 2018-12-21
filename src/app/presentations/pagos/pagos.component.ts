import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle('Pagos');
    this.titleService.setLogin(false);

    this.options = {
      displayGrid: 'onDrag&Resize',
      draggable: { enabled: true },
      maxRows: 8,
      maxCols: 8,
      pushItems: true
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 6, type: 'mini-capturados' },
      { cols: 2, rows: 1, y: 0, x: 4, type: 'mini-pendiente-tibco' },
      { cols: 2, rows: 1, y: 0, x: 2, type: 'mini-enviada' },
      { cols: 2, rows: 1, y: 0, x: 0, type: 'mini-pendiente-mq' },

      { cols: 2, rows: 3, y: 1, x: 0, type: 'expanded-ingresado' },
      { cols: 2, rows: 3, y: 1, x: 2, type: 'expanded-rosa-pendiente' },
      { cols: 2, rows: 3, y: 1, x: 4, type: 'expanded-procesado' },
      { cols: 2, rows: 2, y: 1, x: 6, type: 'expanded-rechazado' },

      { cols: 2, rows: 1, y: 1, x: 6, type: 'expanded-baja' },

      { cols: 4, rows: 2, y: 1, x: 0, type: 'graph1' },
      { cols: 4, rows: 2, y: 2, x: 5, type: 'table' },
    ];
  }


}
