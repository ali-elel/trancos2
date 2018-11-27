import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() { }

  ngOnInit() { }
}
