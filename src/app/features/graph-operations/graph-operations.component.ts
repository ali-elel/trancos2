import { Chart } from 'node_modules/chart.js/dist/chart.js';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
@Component({
  selector: 'app-graph-operations',
  templateUrl: './graph-operations.component.html',
  styleUrls: ['./graph-operations.component.scss']
})
export class GraphOperationsComponent implements OnInit {

  // @ViewChild('lineChart') chartRef;
  @Input() label: string;
  // chart: any;

  view: any[] = [700, 400];
  data = [{
    'name': 'Tx',
    'series': [
      {
        'name': new Date('2016-04-05T04:39:50.327Z'),
        'value': 7300
      },
      {
        'name': new Date('2016-04-05T05:39:50.327Z'),
        'value': 4940
      },
      {
        'name': new Date('2016-04-05T07:39:50.327Z'),
        'value': 3930
      },
      {
        'name': new Date('2016-04-05T09:39:50.327Z'),
        'value': 7731
      },
      {
        'name': new Date('2016-04-05T10:39:50.327Z'),
        'value': 4731
      },
      {
        'name': new Date('2016-04-05T10:58:50.327Z'),
        'value': 3731
      },
      {
        'name': new Date('2016-04-05T11:58:50.327Z'),
        'value': 4231
      }
    ]
  },

  {
    'name': 'Media',
    'series': [
      {
        'value': 3453,
        'name': new Date('2016-04-05T04:39:50.327Z')
      },
      {
        'name': new Date('2016-04-05T05:00:00Z'),
        'value': 8270
      },
      {
        'name': new Date('2016-04-05T07:00:00Z'),
        'value': 6330
      },
      {
        'name': new Date('2016-04-05T19:00:00Z'),
        'value': 8270
      }
    ]
  },
  ];

  // options
  colorScheme = {
    domain: ['#ff2b2b', '#ffb7b7']
  };

  // line, area
  autoScale = true;

  onSelect(event) {
    console.log(event);
  }

  constructor() {
  }


  ngOnInit() {

    // this.chart = new Chart(this.chartRef.nativeElement, {
    //   type: 'line',
    //   data: {
    //     labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'],
    //     datasets: [
    //       {
    //         label: 'Data 1',
    //         data: [0, 4, 11, 5, 7, 8, 10, 15, 16, 12],
    //         borderColor: '#ff2b2b',
    //         fill: false,
    //         borderWidth: 2,
    //         pointStyle: 'rect',
    //         onClick: this.test(event)
    //       },
    //       {
    //         label: 'Data 2',
    //         data: [5, 1, 2, 3, 8, 5, 4, 12, 16, 26],
    //         borderColor: '#ffb7b7',
    //         fill: false,
    //         borderWidth: 2,
    //         pointStyle: 'rect',
    //         borderDash: [5, 5]
    //       }
    //     ]
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     legend: {
    //       position: 'bottom'
    //     },
    //     elements: {
    //       line: {
    //         tension: 0
    //         // titleFontColor: '#000',
    //         // backgroundColor: 'rgba(255,255,255,.9)',
    //       }
    //     }
    //   }
    // });
  }

}
