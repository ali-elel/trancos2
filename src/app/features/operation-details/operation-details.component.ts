import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.scss']
})
export class OperationDetailsComponent implements OnInit {
<<<<<<< HEAD
=======
  @Input() label: string;
  @Input() cab1:string;
>>>>>>> 1f6419119b611edd9475fda3688d7edf05f641f6
  constructor() { }

  ngOnInit() {
  }

}
