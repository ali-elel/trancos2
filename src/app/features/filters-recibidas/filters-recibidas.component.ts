import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-recibidas',
  templateUrl: './filters-recibidas.component.html',
  styleUrls: ['./filters-recibidas.component.scss']
})
export class FiltersRecibidasComponent implements OnInit {

  canal: any[];
  producto: any[];
  acuerdo: any[];
  value: Date;
  es: any;

  constructor() {
    this.canal = [
      {name: 'Sucursales', code: 'su'},
      {name: 'Datanet', code: 'da'},
      {name: 'Obcm', code: 'ob'},
      {name: 'Obe', code: 'obe'},
      {name: 'Superlinea', code: 'PRS'}
  ];

  this.producto = [
    { name: 'Productos', code: 'prod' },
    { name: 'Sueldos', code: 'su' },
    { name: 'Pago a proveedores', code: 'pap' },
    { name: 'Minoristas', code: 'mi' },
    { name: 'Proveedores', code: 'pr' }
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
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
    
  }

}
