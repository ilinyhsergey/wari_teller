import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {ServiceWorkerModule} from '@angular/service-worker';

import {AppComponent} from './app.component';
import {NotFoundComponent} from './common-components/not-found/not-found.component';
import {LoginComponent} from './common-components/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginRoutingModule} from './common-components/login/login-routing.module';
import {AuthService} from './services/auth.service';
import {BASE_PATH} from './api/generated';
import {environment} from '../environments/environment';
import {ApiModule} from './api/api.module';
import {StorageService} from './services/storage.service';
import {AuthGuard} from './services/guards/auth-guard.service';
import {UnsavedChangesGuard} from './services/guards/unsaved-changes-guard.service';
import {RedirectService} from './services/redirect.service';
import {UtilsService} from './services/utils.service';
import {ParametersCacheService} from './services/parameters-cache.service';
import {BASE_HREF, TranslationService} from './services/translation.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './modules/app-material/app-material.module';
import {MainModule} from './modules/main/main.module';

const SERVER_URL = environment.serverUrl;
const APP_BASE_HREF = environment.baseHref;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppMaterialModule, // import the Angular Material modules after Angular's BrowserModule
    HttpClientModule, // Include it under 'imports' in your application module after BrowserModule.
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),

    ApiModule,
    LoginRoutingModule, // first among routing module
    MainModule, // with MainRoutingModule
    AppRoutingModule, // should be last among routing module
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    StorageService,
    AuthService,
    RedirectService,
    ParametersCacheService,
    UtilsService,
    AuthGuard,
    UnsavedChangesGuard,
    TranslationService,
    {provide: BASE_PATH, useValue: SERVER_URL},
    {provide: BASE_HREF, useValue: APP_BASE_HREF},
    // ,{provide: LOCALE_ID, useValue: 'fr'} // uncomment for JIT localization
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
