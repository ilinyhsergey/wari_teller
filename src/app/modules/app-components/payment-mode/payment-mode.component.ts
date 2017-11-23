import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

export type PaymentMode = 'account' | 'cash' | 'waripass';

export class PaymentModeModel {
  wariPassToken: string;
  paymentMode: PaymentMode;
  amount: number;
}

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.component.html',
  styleUrls: ['./payment-mode.component.scss']
})
export class PaymentModeComponent implements OnInit {

  @Output()
  complete: EventEmitter<PaymentModeModel> = new EventEmitter<PaymentModeModel>();

  model: PaymentModeModel;

  constructor() {
  }

  ngOnInit() {
    this.model = {
      wariPassToken: '',
      paymentMode: 'account',
      amount: null
    };
  }

  beforeTabChange(event: NgbTabChangeEvent) {
    this.model.paymentMode = event.nextId as PaymentMode;
  }

  onOkButton() {
    this.complete.emit(this.model);
  }
}
