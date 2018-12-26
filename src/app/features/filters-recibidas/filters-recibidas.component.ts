import { Calendar } from 'primeng/calendar';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filters-recibidas',
  templateUrl: './filters-recibidas.component.html',
  styleUrls: ['./filters-recibidas.component.scss']
})
export class FiltersRecibidasComponent implements OnInit {
  sucursales: any[];
  segmentos: any[];
  productos: any[];
  camaras: any[];
  es: any;
  maxDate: Date = new Date(Date.now());
  minDate: Date = new Date(Date.now());
  date: Date[];
  selectedOffices: string[];
  selectedSegments: string[];
  selectedProducts: string[];
  selectedChambers: string[];

  @ViewChild('calendar') dateRef: Calendar;

  constructor() {
    this.minDate.setMonth(this.minDate.getMonth() - 1);
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
  onChangeChambers() { }
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
