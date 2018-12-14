import { Component, OnInit, Input } from '@angular/core';
import { EmitidasService } from '../../services/emitidas.service';
import { RecibidasService } from '../../services/recibidas.service';
import { Emitted } from 'src/app/model/emitted';
import { Receive } from 'src/app/model/receive';

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
    this._EmitidasService.get(this.label)
      .subscribe((res: Emitted) => {
        this.emitted = res;
      });
  }

  getReceive() {
    this._RecibidasService.get(this.label)
      .subscribe((res: Receive) => {
        this.recieve = res;
      });
  }
}
