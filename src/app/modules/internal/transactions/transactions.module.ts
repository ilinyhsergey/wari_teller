import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {BillWaterComponent} from './bill-water/bill-water.component';
import {AppComponentsModule} from '../../app-components/app-components.module';
import {TransactionsComponent} from './transactions.component';
import { PhoneCreditComponent } from './phone-credit/phone-credit.component';
import { TransferSendComponent } from './transfer-send/transfer-send.component';
import { TransferWithdrawalComponent } from './transfer-withdrawal/transfer-withdrawal.component';
import { TransferRefundComponent } from './transfer-refund/transfer-refund.component';
import { BillElectricityComponent } from './bill-electricity/bill-electricity.component';
import { BillTvComponent } from './bill-tv/bill-tv.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    AppComponentsModule,
    TransactionsRoutingModule
  ],
  declarations: [
    TransactionsComponent,
    BillWaterComponent,
    PhoneCreditComponent,
    TransferSendComponent,
    TransferWithdrawalComponent,
    TransferRefundComponent,
    BillElectricityComponent,
    BillTvComponent
  ]
})
export class TransactionsModule {
}
