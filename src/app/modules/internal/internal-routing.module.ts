import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InternalComponent} from './internal/internal.component';

const routes: Routes = [
  {
    path: '',
    component: InternalComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        // canActivateChild: [AuthGuard],
        children: [
          {
            path: 'transactions',
            loadChildren: 'app/modules/internal/transactions/transactions.module#TransactionsModule'
          }
          // , {
          //   path: 'reports',
          //   loadChildren: 'app/modules/internal/reports/reports.module#ReportsModule'
          // }
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
export class InternalRoutingModule { }
