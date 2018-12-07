import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-dashboard',
  templateUrl: './filters-dashboard.component.html',
  styleUrls: ['./filters-dashboard.component.scss']
})
export class FiltersDashboardComponent implements OnInit {
  fecha: any[];
  sucursal: any[];
  segmento: any[];
  productos: any[];
  value: Date;
  es: any;
  constructor() {
    this.fecha = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

   this.sucursal = [
    {name: 'BANCO SANTANDER RIO S.A.', code: 'sr'},
    {name: 'BANCO DE ENTRE RIOS S.A.', code: 'er'},
    {name: 'BANCO DEL TUCUMAN S.A.', code: 'bt'},
    {name: 'ISRAELITA DE CORDOBA S.A.', code: 'ic'},
    {name: 'BANCO MUNICIPAL DE ROSARIO', code: 'bmr'}
];

this.segmento = [
  {name: 'CORPORATES', code: 'NY'},
  {name: 'INDIVIDUOS', code: 'RM'},
  {name: 'PYME', code: 'LDN'},

];

  this.productos = [
    {name: 'PRODUCTOS', code: 'NY'},
    {name: 'SUELDOS', code: 'RM'},
    {name: 'PAGO A PROVEEDORES', code: 'LDN'},
    {name: 'MINORISTAS', code: 'IST'},
    {name: 'PROVEEDORES', code: 'PRS'}
  ];
   }

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }
  }

}
