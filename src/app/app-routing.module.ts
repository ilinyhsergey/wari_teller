import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {LoginComponent} from './common/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthlessGuard],
  },
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
