import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import * as zoom from 'chartjs-plugin-zoom';
@Component({
  selector: 'app-multi-graph-operations',
  templateUrl: './multi-graph-operations.component.html',
  styleUrls: ['./multi-graph-operations.component.scss']
})
export class MultiGraphOperationsComponent implements OnInit {
  @ViewChild('lineChart') chartRef;
  @ViewChild('lineChart2') chartRef2;
  @Input() label: string;
  chart: any;
  chart2: any;
  // data = [{
  //   'name': 'Tx',
  //   'series': [
  //     {
  //       'name': new Date('2016-04-05T04:39:50.327Z'),
  //       'value': 7300
  //     },
  //     {
  //       'name': new Date('2016-04-05T05:39:50.327Z'),
  //       'value': 4940
  //     },
  //     {
  //       'name': new Date('2016-04-05T07:39:50.327Z'),
  //       'value': 3930
  //     },
  //     {
  //       'name': new Date('2016-04-05T09:39:50.327Z'),
  //       'value': 7731
  //     },
  //     {
  //       'name': new Date('2016-04-05T10:39:50.327Z'),
  //       'value': 4731
  //     },
  //     {
  //       'name': new Date('2016-04-05T10:58:50.327Z'),
  //       'value': 3731
  //     },
  //     {
  //       'name': new Date('2016-04-05T11:58:50.327Z'),
  //       'value': 4231
  //     }
  //   ]
  // },

  // {
  //   'name': 'Media',
  //   'series': [
  //     {
  //       'value': 3453,
  //       'name': new Date('2016-04-05T04:39:50.327Z')
  //     },
  //     {
  //       'name': new Date('2016-04-05T05:00:00Z'),
  //       'value': 8270
  //     },
  //     {
  //       'name': new Date('2016-04-05T07:00:00Z'),
  //       'value': 6330
  //     },
  //     {
  //       'name': new Date('2016-04-05T19:00:00Z'),
  //       'value': 8270
  //     }
  //   ]
  // },
  // ];
  // colorScheme = {
  //   domain: ['#ff2b2b', '#ffb7b7']
  // };

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
              { x: new Date('2018-12-18T00:13:54.000-0' + tzoffset + ':00'), y: 108 },
              { x: new Date('2018-12-18T00:30:12.000-0' + tzoffset + ':00'), y: 46 },
              { x: new Date('2018-12-18T00:38:23.000-0' + tzoffset + ':00'), y: 65 },
              { x: new Date('2018-12-18T00:40:35.000-0' + tzoffset + ':00'), y: 92 },
              { x: new Date('2018-12-18T00:42:12.000-0' + tzoffset + ':00'), y: 165 },
              { x: new Date('2018-12-18T00:54:33.000-0' + tzoffset + ':00'), y: 302 },
              { x: new Date('2018-12-18T01:12:05.000-0' + tzoffset + ':00'), y: 242 },
              { x: new Date('2018-12-18T01:20:19.000-0' + tzoffset + ':00'), y: 193 },
              { x: new Date('2018-12-18T02:19:07.000-0' + tzoffset + ':00'), y: 350 },
              { x: new Date('2018-12-18T04:12:54.000-0' + tzoffset + ':00'), y: 108 },
              { x: new Date('2018-12-18T05:33:11.000-0' + tzoffset + ':00'), y: 46 },
              { x: new Date('2018-12-18T06:34:22.000-0' + tzoffset + ':00'), y: 65 },
              { x: new Date('2018-12-18T07:45:35.000-0' + tzoffset + ':00'), y: 92 },
              { x: new Date('2018-12-18T08:46:16.000-0' + tzoffset + ':00'), y: 205 },
              { x: new Date('2018-12-18T09:57:37.000-0' + tzoffset + ':00'), y: 420 },
              { x: new Date('2018-12-18T10:18:08.000-0' + tzoffset + ':00'), y: 222 },
              { x: new Date('2018-12-18T10:35:00.000-0' + tzoffset + ':00'), y: 320 },
              { x: new Date('2018-12-18T11:29:19.000-0' + tzoffset + ':00'), y: 173 },
              { x: new Date('2018-12-18T13:10:00.000-0' + tzoffset + ':00'), y: 320 }
            ],
            borderColor: '#ff2b2b',
            fill: false,
            borderWidth: 1.5
          },
          {
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
        ]
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
          rangeMin: {
            x: new Date('2018/12/18T00:00:00.000Z'),
            y: 50
          },
        },
        zoom: {
          enabled: true,
          mode: 'x',
          rangeMin: {
            x: new Date('2018/12/18T00:00:00.000Z'),
            y: 50
          },

        },
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                parser: 'HH:mm',
                minUnit: 'minute',
                tooltipFormat: 'HH:mm'
              },
              ticks: {
                maxRotation: 0
              }
            }
          ],
        },
      }
    });


    this.chart2 = new Chart(this.chartRef2.nativeElement, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
        datasets: [
          {
            label: 'Data 1',
            data: [
              { x: new Date('2018-12-18T00:13:54.000-0' + tzoffset + ':00'), y: 108 },
              { x: new Date('2018-12-18T00:30:12.000-0' + tzoffset + ':00'), y: 46 },
              { x: new Date('2018-12-18T00:38:23.000-0' + tzoffset + ':00'), y: 65 },
              { x: new Date('2018-12-18T00:40:35.000-0' + tzoffset + ':00'), y: 92 },
              { x: new Date('2018-12-18T00:42:12.000-0' + tzoffset + ':00'), y: 165 },
              { x: new Date('2018-12-18T00:54:33.000-0' + tzoffset + ':00'), y: 302 },
              { x: new Date('2018-12-18T01:12:05.000-0' + tzoffset + ':00'), y: 242 },
              { x: new Date('2018-12-18T01:20:19.000-0' + tzoffset + ':00'), y: 193 },
              { x: new Date('2018-12-18T02:19:07.000-0' + tzoffset + ':00'), y: 350 },
              { x: new Date('2018-12-18T04:12:54.000-0' + tzoffset + ':00'), y: 108 },
              { x: new Date('2018-12-18T05:33:11.000-0' + tzoffset + ':00'), y: 46 },
              { x: new Date('2018-12-18T06:34:22.000-0' + tzoffset + ':00'), y: 65 },
              { x: new Date('2018-12-18T07:45:35.000-0' + tzoffset + ':00'), y: 92 },
              { x: new Date('2018-12-18T08:46:16.000-0' + tzoffset + ':00'), y: 205 },
              { x: new Date('2018-12-18T09:57:37.000-0' + tzoffset + ':00'), y: 420 },
              { x: new Date('2018-12-18T10:18:08.000-0' + tzoffset + ':00'), y: 222 },
              { x: new Date('2018-12-18T10:35:00.000-0' + tzoffset + ':00'), y: 320 },
              { x: new Date('2018-12-18T11:29:19.000-0' + tzoffset + ':00'), y: 173 },
              { x: new Date('2018-12-18T13:10:00.000-0' + tzoffset + ':00'), y: 320 }
            ],
            borderColor: '#ff2b2b',
            fill: false,
            borderWidth: 1.5
          },
          {
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
        ]
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
          min: {
            x: new Date('2018/12/18T00:00:00.000Z')
          },
        },
        legend: {
          display: false
        },
        zoom: {
          enabled: true,
          mode: 'x',
          min: {
            x: new Date('2018/12/18T00:00:00.000Z')
          },

        },
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                // min: new Date('2018/18/12T00:00:00.000Z').getTime(),
                parser: 'HH:mm',
                minUnit: 'minute',
                tooltipFormat: 'HH:mm'
              },
              ticks: {
                maxRotation: 0
              }
            }
          ],
        },
      }
    });
  }

}
