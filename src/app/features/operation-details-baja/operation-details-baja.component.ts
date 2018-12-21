import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operation-details-baja',
  templateUrl: './operation-details-baja.component.html',
  styleUrls: ['./operation-details-baja.component.scss']
})
export class OperationDetailsBajaComponent implements OnInit {
  @Input() label: string;
  @Input() cab1: string;
  public listado: any;
  constructor(
    private _EmitidasService: EmitidasService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.listOperations();
  }


  listOperations() {
    this._EmitidasService.get(this.label)
      .subscribe(resp => {
        this.listado = resp;
        console.log('this.listado operation-details-baja',this.listado);

      });
  }
}
