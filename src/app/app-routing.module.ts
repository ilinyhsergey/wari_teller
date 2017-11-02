import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './common/not-found/not-found.component';

const routes: Routes = [
  // {
  //   path: 'transactions',
  //   loadChildren: 'app/modules/transactions/transactions.module#TransactionsModule'
  // },
  // {
  //   path: 'reports',
  //   loadChildren: 'app/modules/reports/reports.module#ReportsModule'
  // },
  // {
  //   path: 'profile',
  //   canActivate: [AuthGuard],
  //   component: ProfileComponent,
  // },
  {path: '', redirectTo: '/transactions/cache', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
