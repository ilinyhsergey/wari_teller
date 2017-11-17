import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {LoginComponent} from './common/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginRoutingModule} from './common/login/login-routing.module';
import {AuthService} from './services/auth.service';
import {BASE_PATH} from './api/generated/variables';
import {environment} from '../environments/environment';
import {ApiModule} from './api/api.module';
import {StorageService} from './services/storage.service';
import {AuthGuard} from './services/auth-guard.service';
import {UnsavedChangesGuard} from './services/unsaved-changes-guard.service';
import {AuthlessGuard} from './services/authless-guard.service';
import {RedirectService} from './services/redirect.service';
import {UtilsService} from './services/utils.service';

const SERVER_URL = environment.serverUrl;

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
    HttpModule,
    NgbModule.forRoot(),

    ApiModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  providers: [
    StorageService,
    AuthService,
    RedirectService,
    UtilsService,
    AuthGuard,
    UnsavedChangesGuard,
    AuthlessGuard,
    {provide: BASE_PATH, useValue: SERVER_URL}
    // ,{provide: LOCALE_ID, useValue: 'fr'} // todo uncomment for JIT localization
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
