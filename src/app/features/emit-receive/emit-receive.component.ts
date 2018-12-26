import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { RecibidasService } from '../../services/recibidas.service';
import { Emitted } from 'src/app/model/emitted';
import { Receive } from 'src/app/model/receive';
import { interval, Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

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
         console.log('emitted', res);
        this.emitted = res;
      }, error => { },
      () => {
        // console.log('completo-recibidas');
        // this.getReceive();
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
    interval(1500)
      .pipe(
        startWith(0),
        switchMap(() => this._RecibidasService.get(this.label))
      )
      .subscribe((res: any) => {
         console.log('recieve ', res);
        this.recieve = res;
      }, error => { },
        () => {
          // console.log('completo-recibidas');
          // this.getReceive();
        });

    // this._RecibidasService.get(this.label)
    //   .subscribe((res: Receive) => {
    //     this.recieve = res;
    //   },
    //     error => { },
    //     () => {
    //       // console.log('completo-recibidas');
    //       // this.getReceive();
    //     });
  }



}
