import { Component, OnInit } from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-filters-dashboard',
  templateUrl: './filters-dashboard.component.html',
  styleUrls: ['./filters-dashboard.component.scss']
})
export class FiltersDashboardComponent implements OnInit {
  sucursal: any[];
  segmento: any[];
  productos: any[];
  es: any;

  date: Date[];
  selectedOffice: string;
  selectedSegment: string;
  selectedProduct: string;


  constructor() {
    this.sucursal = [
      { name: 'Banco Santander Rio S.A.', code: 'sr' },
      { name: 'Banco de Entre Rios S.A.', code: 'er' },
      { name: 'Banco del Tucuman S.A.', code: 'bt' },
      { name: 'Israelita de Cordoba S.A.', code: 'ic' },
      { name: 'Banco Municipal de Rosario', code: 'bmr' }
    ];

    this.segmento = [
      { name: 'Corporates', code: 'co' },
      { name: 'Individuos', code: 'in' },
      { name: 'Pyme', code: 'py' },

    ];

    this.productos = [
      { name: 'Productos', code: 'pr' },
      { name: 'Sueldos', code: 'su' },
      { name: 'Pago a proveedores', code: 'pap' },
      { name: 'Minoristas', code: 'mi' },
      { name: 'Proveedores', code: 'pr' }
    ];
  }

  clearCalendar(cal: Calendar) {
    cal.updateModel(null);
    cal.updateInputfield();
    cal.hideOverlay();
  }

  cancelCalendar(cal: Calendar) {
    cal.updateInputfield();
    cal.hideOverlay();
  }

  applyDateCalendar(cal: Calendar) {
    cal.hideOverlay();
    cal.onModelTouched();
  }

  eraseFilters() {
    this.selectedSegment = '';
    this.selectedOffice = '';
    this.selectedProduct = '';
    this.date = [];
  }

  onChangeOffice() { }
  onChangeSegment() { }
  onChangeProduct() { }

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
