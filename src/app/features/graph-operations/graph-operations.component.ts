import 'moment';
import { Chart } from 'node_modules/chart.js/dist/chart.js';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
@Component({
  selector: 'app-graph-operations',
  templateUrl: './graph-operations.component.html',
  styleUrls: ['./graph-operations.component.scss']
})
export class GraphOperationsComponent implements OnInit {

  @ViewChild('lineChart') chartRef;
  @Input() label: string;
  chart: any;


  constructor() {
  }


  ngOnInit() {
    const tzoffset = new Date().getTimezoneOffset() / 60;

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
        datasets: [
          {
            label: 'Data 1',
            data: [
              { x: 1, y: 108 },
              { x: 2, y: 46 },
              { x: 3, y: 54 },
              { x: 4, y: 130 },
              { x: 5, y: 83 }
            ],
            borderColor: '#ff2b2b',
            fill: false,
            borderWidth: 1.5
          }, {
            label: 'Data 2',
            data: [
              { x: new Date('2018-12-18T00:19:54.000-0' + tzoffset + ':00'), y: 80 },
              { x: new Date('2018-12-18T00:27:12.000-0' + tzoffset + ':00'), y: 120 },
              { x: new Date('2018-12-18T00:42:23.000-0' + tzoffset + ':00'), y: 100 },
              { x: new Date('2018-12-18T00:49:35.000-0' + tzoffset + ':00'), y: 80 },
              { x: new Date('2018-12-18T00:57:12.000-0' + tzoffset + ':00'), y: 120 },
              { x: new Date('2018-12-18T00:58:33.000-0' + tzoffset + ':00'), y: 290 },
              { x: new Date('2018-12-18T01:19:05.000-0' + tzoffset + ':00'), y: 270 },
              { x: new Date('2018-12-18T01:48:19.000-0' + tzoffset + ':00'), y: 250 },
              { x: new Date('2018-12-18T02:56:07.000-0' + tzoffset + ':00'), y: 300 },
              { x: new Date('2018-12-18T05:13:54.000-0' + tzoffset + ':00'), y: 150 },
              { x: new Date('2018-12-18T08:30:12.000-0' + tzoffset + ':00'), y: 90 },
              { x: new Date('2018-12-18T09:38:23.000-0' + tzoffset + ':00'), y: 160 },
              { x: new Date('2018-12-18T10:40:35.000-0' + tzoffset + ':00'), y: 110 },
              { x: new Date('2018-12-18T11:42:12.000-0' + tzoffset + ':00'), y: 165 },
              { x: new Date('2018-12-18T11:54:33.000-0' + tzoffset + ':00'), y: 302 },
              { x: new Date('2018-12-18T12:05:32.000-0' + tzoffset + ':00'), y: 290 },
              { x: new Date('2018-12-18T12:20:05.000-0' + tzoffset + ':00'), y: 242 },
              { x: new Date('2018-12-18T12:29:19.000-0' + tzoffset + ':00'), y: 193 },
              { x: new Date('2018-12-18T13:19:07.000-0' + tzoffset + ':00'), y: 350 },
              { x: new Date('2018-12-18T13:12:54.000-0' + tzoffset + ':00'), y: 108 },
              { x: new Date('2018-12-18T14:33:11.000-0' + tzoffset + ':00'), y: 46 },
            ], borderColor: '#ffb7b7',
            fill: false,
            borderWidth: 1.5,
            borderDash: [5, 5]
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          line: {
            tension: 0
          }
        },
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          enabled: true,
          mode: 'x',

        },
        // scales: {
        //   xAxes: [
        //     {
        //       type: 'time',
        //       time: {
        //         parser: 'HH:mm',
        //         minUnit: 'minute',
        //         tooltipFormat: 'HH:mm'
        //       },
        //       ticks: {
        //         maxRotation: 0
        //       }
        //     }
        //   ],
        // },
      }
    });
  }

}
