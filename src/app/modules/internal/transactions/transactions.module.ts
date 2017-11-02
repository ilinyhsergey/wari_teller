import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionsRoutingModule} from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { CashComponent } from './cash/cash.component';

@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ],
  declarations: [
    TransactionsComponent,
    CashComponent
  ]
})
export class TransactionsModule { }
