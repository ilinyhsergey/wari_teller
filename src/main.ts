import {enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./locale/messages.fr.xlf`);
const compilerOptions = {
  providers: [
    // uncomment for JIT localization
    // {provide: TRANSLATIONS, useValue: translations},
    // {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
  ]
};
platformBrowserDynamic().bootstrapModule(AppModule, compilerOptions)
  .catch(err => console.log(err));
