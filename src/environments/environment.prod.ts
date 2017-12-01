export const environment = {
  production: true,
  serverUrl: 'http://stage.i.wari.com/teller_api/v1',
  cacheExpirationMinutesMap: {
    'partnerCode2PartnerName': 60 * 24, // 24 h
    'allCountries': 60 * 24, // 24 h
    'allPieceTypes': 60 * 24, // 24 h
  }
};
