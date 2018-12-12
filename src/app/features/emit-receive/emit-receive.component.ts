import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { RecibidasService } from '../../services/recibidas.service';


@Component({
  selector: 'app-emit-receive',
  templateUrl: './emit-receive.component.html',
  styleUrls: ['./emit-receive.component.scss']
})
export class EmitReceiveComponent implements OnInit {
  public listado_emitidas: any;
  public listado: any;

  public list_recibidas: any;
  public total = 0;
  public total_recibidas = 0;
  public total_emitidas = 0;


  public count_total_emitidas = 0;
  public count_total_recibidas = 0;


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
    this.count_total_emitidas = 0;
    //Lleno this.count_total
    this._EmitidasService.getIngresado()
      .subscribe(resp => {
        this.count_total_emitidas = resp[0]["amountARS"]["amount"];
        this.listado_emitidas = resp;
        //console.warn(this.count_total_emitidas);
      });

    if (tipo === "Total") {
      this._EmitidasService.getIngresado()
        .subscribe(resp => {
          this.total_emitidas = (resp[0]["amountARS"]["amount"] / this.count_total_emitidas) * 100;
          this.listado_emitidas = resp;
        });
    } else if (tipo === "Pendiente") {
      this._EmitidasService.getPendiente()
        .subscribe(resp => {
          this.total_emitidas = (resp[0]["amountARS"]["amount"] / this.count_total_emitidas) * 100;
          this.listado_emitidas = resp;
        });
    } else if (tipo === "Procesado") {
      this._EmitidasService.getProcesado()
        .subscribe(resp => {
          this.total_emitidas = (resp[0]["amountARS"]["amount"] / this.count_total_emitidas) * 100;
          this.listado_emitidas = resp;
        });
    } else if (tipo === "Rechazado") {
      this._EmitidasService.getRechazado()
        .subscribe(resp => {
          this.total_emitidas = (resp[0]["amountARS"]["amount"] / this.count_total_emitidas) * 100;
          this.listado_emitidas = resp;
        });
    }
    // console.log("list_recibidas",this.listado);
    // console.log("tipo",tipo);
  }

  listRecibidas(tipo) {
    this.count_total_recibidas = 0;
    //Lleno this.count_total
    this._RecibidasService.getIngresado()
      .subscribe(resp => {
        this.count_total_recibidas = resp[0]["amountARS"]["amount"];
        this.listado = resp;
        
      });

    if (tipo === "Total") {
        this._RecibidasService.getIngresado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["amount"] / this.count_total_recibidas) * 100;
          this.list_recibidas = resp;
        });
    } else if (tipo === "Pendiente") {
      this._RecibidasService.getPendiente()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["amount"] / this.count_total_recibidas) * 100;
          this.list_recibidas = resp;
        });
    } else if (tipo === "Procesado") {
      this._RecibidasService.getProcesado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["amount"] / this.count_total_recibidas) * 100;
          this.list_recibidas = resp;
        });
    } else if (tipo === "Rechazado") {
      this._RecibidasService.getRechazado()
        .subscribe(resp => {
          this.total_recibidas = (resp[0]["amountARS"]["amount"] / this.count_total_recibidas) * 100;
          this.list_recibidas = resp;
        });
    }
    
  }

}
