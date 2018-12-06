import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-operation-mini',
  templateUrl: './operation-mini.component.html',
  styleUrls: ['./operation-mini.component.scss']
})
export class OperationMiniComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
