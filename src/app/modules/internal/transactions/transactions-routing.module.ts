import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TransactionsComponent} from './transactions.component';
import {CashComponent} from './cash/cash.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          {path: 'cash', component: CashComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionsRoutingModule {
}
