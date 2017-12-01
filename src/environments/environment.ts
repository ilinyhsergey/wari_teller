// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverUrl: 'http://stage.i.wari.com/teller_api/v1',
  cacheExpirationMinutesMap: {
    'partnerCode2PartnerName': 60 * 24, // 24 h
    'allCountries': 60 * 24, // 24 h
    'allPieceTypes': 60 * 24, // 24 h
  }
};
