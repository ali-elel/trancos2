import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation-details-baja',
  templateUrl: './operation-details-baja.component.html',
  styleUrls: ['./operation-details-baja.component.scss']
})
export class OperationDetailsBajaComponent implements OnInit {
  @Input() label: string;
  @Input() cab1:string;
  constructor() { }

  ngOnInit() {
  }

}

