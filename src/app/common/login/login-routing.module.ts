import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {AuthlessGuard} from '../../services/authless-guard.service';

const loginRoutes: Routes = [
  {
    path: 'login',
    canActivate: [AuthlessGuard],
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
  ]
})
export class LoginRoutingModule {
}
