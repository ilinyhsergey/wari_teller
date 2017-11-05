import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {LoginComponent} from './common/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginRoutingModule} from './common/login/login-routing.module';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),

    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
