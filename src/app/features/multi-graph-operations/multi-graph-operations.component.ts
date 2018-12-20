import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
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
    new Date('2018/11/11T10:00:00.000Z'),
    // new Date('2018/11/11T10:30:00.000Z'),
    // new Date('2018/11/11T11:30:00.000Z'),
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
              { x: new Date('2018-12-18T00:23:00.000-0' + tzoffset + ':00'), y: 120 },
              { x: new Date('2018-12-18T00:30:00.000-0' + tzoffset + ':00'), y: 46 }
            ],
            borderColor: '#ff2b2b',
            fill: false,
            borderWidth: 1.5
          }
          // },
          // {
          //   label: 'Data 2',
          //   data: [5, 1, 2, 3, 8, 5, 4, 12, 16, 26],
          //   borderColor: '#ffb7b7',
          //   fill: false,
          //   borderWidth: 1.5,
          //   borderDash: [5, 5]
          // }
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
          mode: 'x'
        },
        zoom: {
          enabled: true,
          mode: 'x',
          limits: {
            max: 1.5,
            min: 0.5
          }
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                format: 'HH:mm',
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


  //   this.chart2 = new Chart(this.chartRef2.nativeElement, {
  //     type: 'line',
  //     plugins: [zoom],
  //     data: {
  //       labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8'],
  //       datasets: [
  //         {
  //           label: '',
  //           data: [0, 10, 11, 13, 7, 8, 10, 15],
  //           borderColor: '#ff2b2b',
  //           fill: false,
  //           borderWidth: 1.5
  //         },
  //         {
  //           label: '',
  //           data: [5, 6, 8, 3, 4, 5, 4, 12],
  //           borderColor: '#ffb7b7',
  //           fill: false,
  //           borderWidth: 1.5,
  //           borderDash: [5, 5]
  //         }
  //       ]
  //     },
  //     options: {

  //       zoom: {
  //         enabled: true,
  //         mode: 'y'
  //       },
  //       pan: {
  //         enabled: true,
  //         mode: 'y',
  //       },
  //       maintainAspectRatio: false,
  //       responsive: true,
  //       legend: {
  //         display: false
  //       },
  //       elements: {
  //         line: {
  //           tension: 0, // disables bezier curves
  //         }
  //       }
  //     }
  //   });
  // }

}
