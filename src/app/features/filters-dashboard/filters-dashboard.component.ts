import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-filters-dashboard',
  templateUrl: './filters-dashboard.component.html',
  styleUrls: ['./filters-dashboard.component.scss']
})
export class FiltersDashboardComponent implements OnInit {
  sucursales: any[];
  segmentos: any[];
  productos: any[];
  es: any;
  maxDate: Date = new Date(Date.now());
  minDate: Date = new Date(Date.now());
  date: Date[];
  selectedOffices: string[];
  selectedSegments: string[];
  selectedProducts: string[];

  @ViewChild('calendar') dateRef: Calendar;

  constructor() {
    this.minDate.setMonth(this.minDate.getMonth() - 1);

    this.sucursales = [
      { name: 'Banco Santander Rio S.A.', code: 'sr' },
      { name: 'Banco de Entre Rios S.A.', code: 'er' },
      { name: 'Banco del Tucuman S.A.', code: 'bt' },
      { name: 'Israelita de Cordoba S.A.', code: 'ic' },
      { name: 'Banco Municipal de Rosario', code: 'bmr' }
    ];

    this.segmentos = [
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
  calendarOnSelect(event) {
    console.log(event);
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
    this.selectedSegments = [];
    this.selectedOffices = [];
    this.selectedProducts = [];
    this.dateRef.value = null;
    this.dateRef.updateInputfield();
    this.date = null;
  }

  onChangeOffice() { }
  onChangeSegment() { }
  onChangeProduct() { }

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
      monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      today: 'Hoy',
      clear: 'Borrar'
    };

  }



}
