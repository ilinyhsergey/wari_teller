# TellerFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running with Localization

#### Make translation file first
1) Put i18n attribute to template `i18n="{meaning}|{description}@@{fixedTransUnitId}"`
2) Generate template for translation file `messages.xlf` by running `ng xi18n --outputPath src/locale --outFile messages.xlf`
3) Rename the file according language you need `messages.fr.xlf`
4) Translate the file `messages.fr.xlf` by adding tag `<target>put translate here</target>` right after tag `<source>source for translateion</source>`

#### Running with JIT compiler
To run dev server with localization (for French for example) uncomment lines or add following code:

Add compiler options for bootstrap AppModule **main.js:** 
```
// main.js
// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./locale/messages.fr.xlf`);
const compilerOptions = {
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
  ]
};
platformBrowserDynamic().bootstrapModule(AppModule, compilerOptions)
``` 
And add provider in **app.module.ts:**
```
// app.module.ts
@NgModule({
  providers: [
    ...
    {provide: LOCALE_ID, useValue: 'fr'}
    ...
  ]  
})
export class AppModule {
}
```
Then run `ng serve`

#### Running with AOT compiler
To build for production run:
`ng build -prod --i18nFile=src/locale/messages.fr.xlf --i18nFormat=xlf --locale=fr`

To run compiled version with localization run: 
`ng serve --aot --i18nFile=src/locale/messages.fr.xlf --i18nFormat=xlf --locale=fr`

Where `messages.fr.xlf` is file with translation.

## PWA: Service Worker
To test service worker:
1) Build the app: `ng build --prod`
2) Go to dist: `cd dist/`
3) Run server: `../node_modules/http-server/bin/http-server -p 8080` (service worker does not work with `ng serve`)  

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
