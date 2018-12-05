import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emit-receive',
  templateUrl: './emit-receive.component.html',
  styleUrls: ['./emit-receive.component.scss']
})
export class EmitReceiveComponent implements OnInit {

  @Input() label: string;
  @Input() isAlert: boolean;
  @Input() percent: boolean;
  constructor() { }

  ngOnInit() {
  }

}
