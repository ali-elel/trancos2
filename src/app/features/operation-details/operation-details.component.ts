import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { Emitted } from 'src/app/model/emitted';
import { interval, Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.scss']
})
export class OperationDetailsComponent implements OnInit {
  @Input() label: string;
  @Input() cab1: string;
  @Input() alert = false;

  public listado: any;
  public listGral: any;


  constructor(
    private _EmitidasService: EmitidasService) {
  }

  ngOnInit() {
    this.listOperationsDetails();
  }

  listOperationsDetails() {
    interval(1500)
      .pipe(
        startWith(0),
        switchMap(() => this._EmitidasService.get(this.label))
      )
      .subscribe((res: Emitted) => {
        this.listado = res.amountARS;
        this.listGral = res;
        // console.log(this.listGral);
      },
      error => { },
      () => {
        // console.log('completo-emitidas');
        // this.getEmitted();
      });
  }
}
