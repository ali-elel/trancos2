import { Component, OnInit } from '@angular/core';
import {SelectItemGroup} from 'primeng/api';
@Component({
  selector: 'app-filters-pagos',
  templateUrl: './filters-pagos.component.html',
  styleUrls: ['./filters-pagos.component.scss']
})
export class FiltersPagosComponent implements OnInit {
  fecha: any[];
  canal: any[];
  productos: any[];
  acuerdo: any[];

  filtersSelectedng: SelectItemGroup[];

  constructor() {
    this.fecha = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

   this.canal = [
    {name: 'New York', code: 'NY'},
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

  this.acuerdo = [
    {name: 'fff', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];
  
   }
 
  ngOnInit() {
    
  }

}
