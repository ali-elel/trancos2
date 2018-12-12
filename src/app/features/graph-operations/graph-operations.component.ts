import { Chart } from 'chart.js';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import * as Dygraph from 'dygraphs';
@Component({
  selector: 'app-graph-operations',
  templateUrl: './graph-operations.component.html',
  styleUrls: ['./graph-operations.component.scss']
})
export class GraphOperationsComponent implements OnInit {

  @ViewChild('lineChart') chartRef;
  // @ViewChild('dygraph') graphRef;
  @Input() label: string;
  chart: any;
  // dygraph: any;

  constructor() { }

  ngOnInit() {
    // this.dygraph = new Dygraph(this.graphRef.nativeElement, 'temperatures.csv', {});
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
        datasets: [
          {
            label: 'Data 1',
            data: [0, 4, 11, 5, 7, 8, 10, 15, 16, 12],
            borderColor: '#ff2b2b',
            fill: false,
            borderWidth: 2,
            pointStyle: 'rect'
          },
          {
            label: 'Data 2',
            data: [5, 1, 2, 3, 8, 5, 4, 12, 16, 26],
            borderColor: '#ffb7b7',
            fill: false,
            borderWidth: 2,
            pointStyle: 'rect',
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
            // titleFontColor: '#000',
            // backgroundColor: 'rgba(255,255,255,.9)',
          }
        }
      }
    });
  }

}
