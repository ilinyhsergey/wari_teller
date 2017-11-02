import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './common/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/internal/internal.module#InternalModule',
    // canLoad: [AuthGuard]
  },
  // {
  //   path: 'profile',
  //   canActivate: [AuthGuard],
  //   component: ProfileComponent,
  // },
  {path: '', redirectTo: '/transactions/cash', pathMatch: 'full'},
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
