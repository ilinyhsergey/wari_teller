import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WaterBillComponent} from './water-bill/water-bill.component';
import {UnsavedChangesGuard} from '../../../services/unsaved-changes-guard.service';
import {AuthGuard} from '../../../services/auth-guard.service';
import {TransactionsComponent} from './transactions.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'water',
        component: WaterBillComponent,
        canDeactivate: [UnsavedChangesGuard]
      },
      {path: '', redirectTo: '/transactions/water', pathMatch: 'full'},
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
