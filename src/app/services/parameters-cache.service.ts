import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {B2BPartnerInformation, GeoZone, Motif, ParameterApi} from '../api/generated';
import {Collection} from '../app.declaration';
import {StorageService} from './storage.service';
import {BaseCacheService} from './base-cache.service';
import {TranslationService} from './translation.service';
import {PieceType} from '../api/generated/model/PieceType';

@Injectable()
export class ParametersCacheService extends BaseCacheService {

  constructor(private parameterApi: ParameterApi,
              private translationService: TranslationService,
              storageService: StorageService) {
    super(storageService);
  }

  getAllTransferMotifs(): Observable<Motif[]> {
    const observable: Observable<Motif[]> = this.getExpiredCacheValue('allTransferMotifs',
      () => this.parameterApi.getAllTransferMotifsGet1());
    return this.translationService.translateObservableOfArr(observable);
  }

  getAllCountries(): Observable<GeoZone[]> {
    return this.getExpiredCacheValue('allCountries', () => this.parameterApi.getAllCountriesGet1());
  }

  getAllPieceTypes() {
    const observable: Observable<PieceType[]> = this.getExpiredCacheValue('allPieceTypes',
      () => this.parameterApi.getAllPieceTypesGet1());
    return this.translationService.translateObservableOfArr(observable);
  }

  /**
   * @returns {Observable<Collection<string>>} - a map code -> name
   */
  findB2BPartnerInformations(): Observable<Collection<string[]>> {
    return this.getExpiredCacheValue('partnerCode2PartnerName', () => {
      return this.parameterApi.findB2BPartnerInformationsGet1().map(infos => this.mapPartnerInfo2Map(infos));
    });
  }

  private mapPartnerInfo2Map(infos: B2BPartnerInformation[]): Collection<string[]> {
    return infos.reduce((res: Collection<string[]>, info: B2BPartnerInformation) => {
      const arr = res[info.code] || (res[info.code] = []);
      arr.push(info.name);
      return res;
    }, {});
  }

}
