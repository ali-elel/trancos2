import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-filters-pagos',
  templateUrl: './filters-pagos.component.html',
  styleUrls: ['./filters-pagos.component.scss']
})
export class FiltersPagosComponent implements OnInit {
  fecha: any[];
  sucursal: any[];
  segmento: any[];
  productos: any[];
  


  constructor() {
    this.fecha = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

   this.sucursal = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];

this.segmento = [
  {name: 'fff', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];

  this.productos = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

 
  
   }
 
  ngOnInit() {
    
  }

}
