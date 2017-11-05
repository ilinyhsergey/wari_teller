import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionsRoutingModule} from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { WaterBillComponent } from './water-bill/water-bill.component';

@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ],
  declarations: [
    TransactionsComponent,
    WaterBillComponent
  ]
})
export class TransactionsModule { }
