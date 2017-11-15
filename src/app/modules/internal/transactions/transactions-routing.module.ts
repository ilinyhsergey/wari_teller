import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WaterBillComponent} from './water-bill/water-bill.component';
import {UnsavedChangesGuard} from '../../../services/guards/unsaved-changes-guard.service';
import {AuthGuard} from '../../../services/guards/auth-guard.service';
import {TransactionsComponent} from './transactions.component';
import {PartnerInfoResolverService} from './services/partner-info-resolver.service';

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
        canDeactivate: [UnsavedChangesGuard],
        resolve: {
          partnerInfo: PartnerInfoResolverService
        }
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
  ],
  providers: [
    PartnerInfoResolverService
  ]
})
export class TransactionsRoutingModule {
}
