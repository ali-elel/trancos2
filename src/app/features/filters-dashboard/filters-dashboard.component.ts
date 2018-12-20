import { FilterProductosService } from './../../services/filter-productos.service';
import { FilterSegmentosService } from './../../services/filter-segmentos.service';
import { FilterSucursalesService } from './../../services/filter-sucursales.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Calendar } from 'primeng/calendar';
@Component({
  selector: 'app-filters-dashboard',
  templateUrl: './filters-dashboard.component.html',
  styleUrls: ['./filters-dashboard.component.scss']
})
export class FiltersDashboardComponent implements OnInit {
  @Input() label: string;

  sucursales: any[];
  segmentos: any[];
  productos: any[];
  es: any;

  date: Date[];
  selectedOffices: string[];
  selectedSegments: string[];
  selectedProducts: string[];
  @ViewChild('calendar') dateRef: Calendar;

  constructor(
    private _FilterSucursalesService: FilterSucursalesService,
    private _FilterSegmentosService: FilterSegmentosService,
    private _FilterProductosService: FilterProductosService,

  ) {
    // this.sucursales = [
    //   { name: 'Banco Santander Rio S.A.', code: 'sr' },
    //   { name: 'Banco de Entre Rios S.A.', code: 'er' },
    //   { name: 'Banco del Tucuman S.A.', code: 'bt' },
    //   { name: 'Israelita de Cordoba S.A.', code: 'ic' },
    //   { name: 'Banco Municipal de Rosario', code: 'bmr' }
    // ];

    // this.segmentos = [
    //   { name: 'Corporates', code: 'co' },
    //   { name: 'Individuos', code: 'in' },
    //   { name: 'Pyme', code: 'py' },

    // ];

    // this.productos = [
    //   { name: 'Productos', code: 'pr' },
    //   { name: 'Sueldos', code: 'su' },
    //   { name: 'Pago a proveedores', code: 'pap' },
    //   { name: 'Minoristas', code: 'mi' },
    //   { name: 'Proveedores', code: 'pr' }
    // ];
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

  onChangeOffice() {
    this.getFilterSegmentos();
  }
  onChangeSegment() {
    this.getFilterProductos();
  }
  onChangeProduct() {
    alert('oka');
  }

  ngOnInit() {
    // alert(this.label);
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre',
        'octubre', 'noviembre', 'diciembre'],
      monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      today: 'Hoy',
      clear: 'Borrar'
    };

    this.getFilterSucursales();
  }

  getFilterSucursales() {
    this._FilterSucursalesService.get('dashboard')
      .subscribe((res: any) => {
        this.sucursales = res['filters'];
      },
        error => { },
        () => {
          // console.log('completo-emitidas');
          // this.getEmitted();
        });
  }



  getFilterSegmentos() {
    this._FilterSegmentosService.get('dashboard', this.selectedOffices)
      .subscribe((res: any) => {
        this.segmentos = res['filters'];
      },
        error => { },
        () => {
          // console.log('completo-emitidas');
          // this.getEmitted();
        });
  }

  getFilterProductos() {
    this._FilterProductosService.get('dashboard')
      .subscribe((res: any) => {
        this.productos = res['filters'];
        // console.log(this.productos);
      },
        error => { },
        () => {
          // console.log('completo-emitidas');
          // this.getEmitted();
        });
  }
}
