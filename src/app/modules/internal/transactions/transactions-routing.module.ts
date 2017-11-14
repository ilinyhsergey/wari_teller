import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionsComponent} from './transactions/transactions.component';
import {WaterBillComponent} from './water-bill/water-bill.component';
import {UnsavedChangesGuard} from '../../../services/unsaved-changes-guard.service';
import {AuthGuard} from '../../../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent, // todo is the component really need?
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        canDeactivate: [UnsavedChangesGuard],
        children: [
          {path: 'water', component: WaterBillComponent},
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
