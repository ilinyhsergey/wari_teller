import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BillWaterComponent} from './bill-water/bill-water.component';
import {UnsavedChangesGuard} from '../../../services/guards/unsaved-changes-guard.service';
import {AuthGuard} from '../../../services/guards/auth-guard.service';
import {TransactionsComponent} from './transactions.component';
import {PartnerInfoResolverService} from './services/partner-info-resolver.service';
import {PhoneCreditComponent} from './phone-credit/phone-credit.component';
import {BillElectricityComponent} from './bill-electricity/bill-electricity.component';
import {BillTvComponent} from './bill-tv/bill-tv.component';
import {TransferSendComponent} from './transfer-send/transfer-send.component';
import {TransferWithdrawalComponent} from './transfer-withdrawal/transfer-withdrawal.component';
import {TransferRefundComponent} from './transfer-refund/transfer-refund.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'water',
        component: BillWaterComponent,
        canDeactivate: [UnsavedChangesGuard],
        resolve: {
          partnerInfo: PartnerInfoResolverService
        }
      },
      {path: 'electricity', component: BillElectricityComponent},
      {path: 'tv', component: BillTvComponent},
      {path: 'send', component: TransferSendComponent},
      {path: 'withdrawal', component: TransferWithdrawalComponent},
      {path: 'refund', component: TransferRefundComponent},
      {
        path: 'phone',
        component: PhoneCreditComponent,
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
