import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { RecibidasService } from '../../services/recibidas.service';
import { Emitted } from 'src/app/model/emitted';
import { Receive } from 'src/app/model/receive';
import { interval, Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

// emit value in sequence every 1 second
const source = interval(5000);
// output: 0,1,2,3,4,5....
const subscribe = source.subscribe(val => console.log('esto es', val));





@Component({
  selector: 'app-emit-receive',
  templateUrl: './emit-receive.component.html',
  styleUrls: ['./emit-receive.component.scss']
})

export class EmitReceiveComponent implements OnInit {
  emitted: Emitted;
  recieve: Receive;
  @Input() label: string;
  @Input() isAlert: boolean;
  @Input() percent: boolean;


  constructor(
    private _EmitidasService: EmitidasService,
    private _RecibidasService: RecibidasService,
  ) { }

  ngOnInit() {
    this.getEmitted();
    this.getReceive();
  }

  getEmitted() {
    interval(1500)
    .pipe(
      startWith(0),
      switchMap(() => this._EmitidasService.get(this.label))
    )
    .subscribe((res: any) => {
      // console.log(res);
      this.emitted = res;
    });

    // this._EmitidasService.get(this.label)
    //   .subscribe((res: Emitted) => {
    //     this.emitted = res;
    //   },
    //   error => { },
    //   () => {
    //     // console.log('completo-emitidas');
    //     // this.getEmitted();
    //   });
  }

  getReceive() {
    this._RecibidasService.get(this.label)
      .subscribe((res: Receive) => {
        this.recieve = res;
      },
        error => { },
        () => {
          // console.log('completo-recibidas');
          // this.getReceive();
        });
  }



}
