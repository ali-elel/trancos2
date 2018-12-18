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

  lineChartData = [{
    data: [65, 59, 80, 81, 56, 55, 40, 100, 120],
    label: 'Series A',
    fill: false,
    borderColor: '#ff2b2b',
    borderWidth: 1.5
  },
  {
    data: [28, 48, 40, 19, 86, 27, 90, 50, 35],
    label: 'Series B',
    borderColor: '#ffb7b7',
    fill: false,
    borderWidth: 1.6,
    borderDash: [5, 5]
  }];

  lineChartLabels = [
    'T1', 'T2',
    '2018/11/11T04:00:00.000Z',
    new Date('2018/11/11T07:30:00.000Z'),
    new Date('2018/11/11T08:30:00.000Z'),
    new Date('2018/11/11T08:45:00.000Z'),
    new Date('2018/11/11T09:30:00.000Z'),
    new Date('2018/11/11T09:45:00.000Z'),
    new Date('2018/11/11T10:00:00.000Z')
  ];
  lineChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    pan: {
      enabled: true,
      mode: 'x',
      speed: 10,
      threshold: 10,
      onPan: function () { console.log('I was panned!!!'); }
    },
    zoom: {
      enabled: true,
      mode: 'x',
    },
    elements: {
      point: { pointStyle: 'rect' },
      line: {
        tension: 0
      }
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            format: 'MM/DD/YYYY HH:mm',
            tooltipFormat: 'll HH:mm'
          },
          ticks: {
            maxRotation: 0
          }
        }
      ],

    },
  };
  lineChartColors = ['#ff2b2b', '#ffb7b7'];
  public lineChartLegend = true;
  lineChartType = 'line';

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
            x: new Date('2018/12/18T00:00:00.000Z')          },

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
