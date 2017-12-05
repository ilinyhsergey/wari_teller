import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {ParameterApi} from '../api/generated/api/ParameterApi';
import {B2BPartnerInformation} from '../api/generated/model/B2BPartnerInformation';
import {Collection} from '../app.declaration';
import {GeoZone} from '../api/generated/model/GeoZone';
import {StorageService} from './storage.service';
import {map} from 'rxjs/operators';
import {BaseCacheService} from './base-cache.service';
import {Motif} from '../api/generated';
import {TranslationService} from './translation.service';

@Injectable()
export class ParametersCacheService extends BaseCacheService {

  constructor(private parameterApi: ParameterApi,
              private translationService: TranslationService,
              storageService: StorageService) {
    super(storageService);
  }

  getAllTransferMotifs(): Observable<Motif[]> {
    const observable = this.getExpiredCacheValue('allTransferMotifs', () => this.parameterApi.getAllTransferMotifsGet1());
    return this.translationService.translateList(observable);
  }

  getAllCountries(): Observable<GeoZone[]> {
    return this.getExpiredCacheValue('allCountries', () => this.parameterApi.getAllCountriesGet1());
  }

  getAllPieceTypes() {
    const observable = this.getExpiredCacheValue('allPieceTypes', () => this.parameterApi.getAllPieceTypesGet1());
    return this.translationService.translateList(observable);
  }

  /**
   * @returns {Observable<Collection<string>>} - a map code -> name
   */
  findB2BPartnerInformations(): Observable<Collection<string[]>> {
    return this.getExpiredCacheValue('partnerCode2PartnerName', () => {
      return this.parameterApi.findB2BPartnerInformationsGet1().pipe(
        map(infos => this.mapPartnerInfo2Map(infos))
      );
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
