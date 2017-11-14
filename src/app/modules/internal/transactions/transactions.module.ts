import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import {TransactionsRoutingModule} from './transactions-routing.module';
import {WaterBillComponent} from './water-bill/water-bill.component';
import {AppComponentsModule} from '../../app-components/app-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    AppComponentsModule,
    TransactionsRoutingModule
  ],
  declarations: [
    WaterBillComponent
  ]
})
export class TransactionsModule {
}
