import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { RecibidasService } from '../../services/recibidas.service';


@Component({
  selector: 'app-emit-receive',
  templateUrl: './emit-receive.component.html',
  styleUrls: ['./emit-receive.component.scss']
})
export class EmitReceiveComponent implements OnInit {
  public listado: any;
  public list_recibidas: any;
  public total = 0;
  public total_recibidas = 0;

  public count_total = 0;

  @Input() label: string;
  @Input() isAlert: boolean;
  @Input() percent: boolean;

  constructor(
    private _EmitidasService: EmitidasService,
    private _RecibidasService: RecibidasService,
  ) {

  }

  ngOnInit() {

    this.listEmitidas(this.label);
    this.listRecibidas(this.label);

  }

  listEmitidas(tipo) {
    this.count_total = 0;
    //Lleno this.count_total
    this._EmitidasService.getIngresado()
      .subscribe(resp => {
        this.count_total = resp[0]["amountARS"]["count"];
        this.listado = resp;
      });

    if (tipo === "Total") {
      this._EmitidasService.getIngresado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.listado = resp;
        });
    } else if (tipo === "Pendiente") {
      this._EmitidasService.getPendiente()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.listado = resp;
        });
    } else if (tipo === "Procesado") {
      this._EmitidasService.getProcesado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.listado = resp;
        });
    } else if (tipo === "Rechazado") {
      this._EmitidasService.getRechazado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.listado = resp;
        });
    }
  }

  listRecibidas(tipo) {
    this.count_total = 0;
    //Lleno this.count_total
    this._RecibidasService.getIngresado()
      .subscribe(resp => {
        this.count_total = resp[0]["amountARS"]["count"];
        this.listado = resp;
      });

    if (tipo === "Total") {
        this._RecibidasService.getIngresado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.list_recibidas = resp;
        });
    } else if (tipo === "Pendiente") {
      this._RecibidasService.getPendiente()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.list_recibidas = resp;
        });
    } else if (tipo === "Procesado") {
      this._RecibidasService.getProcesado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.list_recibidas = resp;
        });
    } else if (tipo === "Rechazado") {
      this._RecibidasService.getRechazado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["count"] / this.count_total) * 100;
          this.list_recibidas = resp;
        });
    }
  }

}
