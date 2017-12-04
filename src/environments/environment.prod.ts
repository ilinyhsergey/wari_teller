export const environment = {
  lang: 'fr',
  production: true,
  serverUrl: 'http://stage.i.wari.com/teller_api/v1',
  cacheExpirationMinutesMap: {
    'translation.json': 1440, // 24 * 60 minutes
    'partnerCode2PartnerName': 1440,
    'allCountries': 1440,
    'allPieceTypes': 1440,
  }
};
