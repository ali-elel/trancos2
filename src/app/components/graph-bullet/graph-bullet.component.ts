import { Component, OnInit, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import * from 'jquery';
@Component({
  selector: 'app-graph-bullet',
  templateUrl: './graph-bullet.component.html',
  styleUrls: ['./graph-bullet.component.scss']
})

export class GraphBulletComponent implements OnInit {

  @Input() options: GraphBulletOptions;

  values: number[];
  max: number;
  segmentsWidth: SegmentTypesWidth;

  constructor() {

  }

  ngOnInit() {

    // Check Maximum
    if (this.options.segments.proyected.value > this.options.segments.available.value) {
      this.max = this.options.segments.proyected.value;
      // this.options.segments.exceded.value = this.options.segments.proyected.value - this.options.segments.available.value;

    } else if (this.options.segments.used.value > this.options.segments.available.value) {
      this.max = this.options.segments.used.value;
      // this.options.segments.exceded.value = this.options.segments.used.value - this.options.segments.available.value;
    } else {
      this.max = this.options.segments.available.value;
    }

    // Numbers for Division
    this.values = [];
    const minim = this.max / 6;
    this.values.push(minim);
    this.values.push(minim * 2);
    this.values.push(minim * 3);
    this.values.push(minim * 4);
    this.values.push(minim * 5);
    this.values.push(this.max);

    // Definir dimensiones

    this.segmentsWidth = new SegmentTypesWidth();

    // Definir el tamaño del Exceso
    if (this.options.segments.exceded.value > 0) {
      this.segmentsWidth.exceded = this.options.segments.exceded.value * 100 / this.max;
    }

    // Definir tamaño de Utilizadas
    if (this.options.segments.used.value > 0) {
      if (this.max === this.options.segments.used.value) { // Se le resta el exceso
        this.segmentsWidth.used = this.options.segments.used.value * 100 / this.max - this.segmentsWidth.exceded;
      } else {
        this.segmentsWidth.used = this.options.segments.used.value * 100 / this.max;
      }
    }

    if (this.options.segments.proyected.value > 0) {
      if (this.max === this.options.segments.proyected.value) { // Se le resta el exceso
        this.segmentsWidth.proyected = this.options.segments.proyected.value * 100 / this.max - this.segmentsWidth.exceded - this.segmentsWidth.used;
      } else {
        this.segmentsWidth.proyected = this.options.segments.proyected.value * 100 / this.max;
      }
    }

    if (this.options.segments.available.value > 0) {
      this.segmentsWidth.available =
        (this.options.segments.available.value * 100 / this.max) - this.segmentsWidth.used - this.segmentsWidth.proyected;
    }
  }
}
export class SegmentsBullet {
  text: string;
  currency: string;
  value: number;
  backgroundColor: string;
}
export class SegmentTypes {
  used: SegmentsBullet;
  proyected: SegmentsBullet;
  available: SegmentsBullet;
  exceded: SegmentsBullet;
}
export class GraphBulletOptions {
  name: string;
  vertical = false;
  segments: SegmentTypes;
}
export class SegmentTypesWidth {
  used: number;
  proyected: number;
  available: number;
  exceded: number;

  constructor() {
    this.used = 0;
    this.proyected = 0;
    this.available = 0;
    this.exceded = 0;
  }
}
