// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  lang: 'en',
  production: false,
  serverUrl: 'http://stage.i.wari.com/teller_api/v1',
  baseHref: '/',
  cacheExpirationMinutesMap: {
    'translation.json': 1440, // 24 * 60 minutes
    'partnerCode2PartnerName': 1440,
    'allCountries': 1440,
    'allPieceTypes': 1440,
  }
};
