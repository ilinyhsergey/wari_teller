import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InternalComponent} from './internal/internal.component';
import {AuthGuard} from '../../services/auth-guard.service';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: InternalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
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
