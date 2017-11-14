import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WaterBillComponent} from './water-bill/water-bill.component';
import {UnsavedChangesGuard} from '../../../services/unsaved-changes-guard.service';
import {AuthGuard} from '../../../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {
            path: 'water',
            component: WaterBillComponent,
            canDeactivate: [UnsavedChangesGuard]
          },
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
