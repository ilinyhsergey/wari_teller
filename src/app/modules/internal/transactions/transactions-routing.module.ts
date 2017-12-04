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
import {TransferSendStep1Component} from './transfer-send-step1/transfer-send-step1.component';
import {TransferSendStep2Component} from './transfer-send-step2/transfer-send-step2.component';
import {TransferSendStep3Component} from './transfer-send-step3/transfer-send-step3.component';
import {TransferSendStep4Component} from './transfer-send-step4/transfer-send-step4.component';
import {AllCountriesResolverService} from './services/all-countries-resolver.service';
import {AllPieceTypesResolverService} from './services/all-piece-types-resolver.service';
import {AllTransferMotifsResolverService} from './services/all-transfer-motifs-resolver.service';

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
      {
        path: 'send',
        component: TransferSendComponent,
        children: [
          {path: 'step1', component: TransferSendStep1Component,
            resolve: {
              allCountries: AllCountriesResolverService,
              allPieceTypes: AllPieceTypesResolverService,
              allTransferMotifs: AllTransferMotifsResolverService
            }},
          {path: 'step2', component: TransferSendStep2Component,
            resolve: {
              allCountries: AllCountriesResolverService
            }},
          {path: 'step3', component: TransferSendStep3Component},
          {path: 'step4', component: TransferSendStep4Component},
          {path: '', redirectTo: '/transactions/send/step1', pathMatch: 'full'},
        ]
      },
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
    PartnerInfoResolverService,
    AllCountriesResolverService,
    AllPieceTypesResolverService,
    AllTransferMotifsResolverService,
  ]
})
export class TransactionsRoutingModule {
}
