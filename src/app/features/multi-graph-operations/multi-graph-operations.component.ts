import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
        datasets: [
          {
            label: 'Data 1',
            data: [0, 4, 11, 5, 7, 8, 10, 15, 16, 12],
            borderColor: '#ff2b2b',
            fill: false
          },
          {
            label: 'Data 2',
            data: [5, 1, 2, 3, 8, 5, 4, 12, 16, 26],
            borderColor: '#630909',
            fill: false
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        }
      }
    });
    this.chart2 = new Chart(this.chartRef2.nativeElement, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8'],
        datasets: [
          {
            label: 'Data 1',
            data: [0, 10, 11, 13, 7, 8, 10, 15],
            borderColor: '#ff2b2b',
            fill: false
          },
          {
            label: 'Data 2',
            data: [5, 6, 8, 3, 4, 5, 4, 12],
            borderColor: '#630909',
            fill: false
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          line: {
            tension: 0, // disables bezier curves
          }
        }
      }
    });
  }

}
