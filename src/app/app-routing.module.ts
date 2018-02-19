import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './common-components/not-found/not-found.component';

const routes: Routes = [
  // { // for lazy loading
  //   path: 'transactions',
  //   loadChildren: 'app/modules/main/main.module#MainModule'
  // },
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
