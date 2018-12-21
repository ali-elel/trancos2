import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { Emitted } from 'src/app/model/emitted';

@Component({
  selector: 'app-operation-mini',
  templateUrl: './operation-mini.component.html',
  styleUrls: ['./operation-mini.component.scss']
})
export class OperationMiniComponent implements OnInit {
  @Input() label: string;
  @Input() alert: boolean;
  public listado: any;
  public listGral: any;
  constructor(
    private _EmitidasService: EmitidasService
  ) { }

  ngOnInit() {
    this.listOperationsMini();
  }

  listOperationsMini() {
    this._EmitidasService.get(this.label)
      .subscribe((res: Emitted) => {
        this.listado = res;
      },
      error => {
        console.log(error);
      },
      () => {
        // console.log('completo-emitidas');
        // this.getEmitted();
      });
  }

}
