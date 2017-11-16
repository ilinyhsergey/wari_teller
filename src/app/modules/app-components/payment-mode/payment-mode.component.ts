import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.scss']
})
export class PaymentModeComponent implements OnInit {

  @Output()
  complete: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onOkButton() {
    this.complete.emit(true);
  }
}
