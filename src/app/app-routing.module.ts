import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './common/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'transactions',
    loadChildren: 'app/modules/internal/transactions/transactions.module#TransactionsModule'
  },
  {path: '', redirectTo: '/transactions/water', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
