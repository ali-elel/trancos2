import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from "../../services/emitidas.service";

@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.scss']
})
export class OperationDetailsComponent implements OnInit {
  @Input() label: string;
  @Input() cab1: string;
  public listado: any;

  constructor(
    private _EmitidasService: EmitidasService,
  ) {   

  }
  
  ngOnInit() {
    this.listOperations();

  }

 

  listOperations() {
    this._EmitidasService.getBaja()
      .subscribe(resp => {
        this.listado = resp;
      });
  }

 

}
