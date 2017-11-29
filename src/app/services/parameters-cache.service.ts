import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

import {ParameterApi} from '../api/generated/api/ParameterApi';
import {B2BPartnerInformation} from '../api/generated/model/B2BPartnerInformation';
import {Collection} from '../app.declaration';
import {GeoZone} from '../api/generated/model/GeoZone';
import {StorageService} from './storage.service';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class ParametersCacheService {

  private expirationMinutesMap: Collection<number> = environment.cacheExpirationMinutesMap;
  private memMap: Collection<Object> = {}; // used if cache expired (in memory)

  constructor(private parameterApi: ParameterApi,
              private storageService: StorageService) {
  }

  getAllCountries(): Observable<GeoZone[]> {
    return this.getExpiredCacheValue('allCountries', () => this.parameterApi.getAllCountriesGet1());
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

  private getExpiredCacheValue<T>(key: string, load: () => Observable<T>): Observable<T> {
    const itemValue: T = <T>this.storageService.get(key);
    if (itemValue) {
      // already cached
      this.memMap[key] = itemValue; // update if app just started
      return Observable.of(_.cloneDeep(itemValue)); // return immediately
    } else {
      // if doesn't exist or expired
      const loadedOb = load();
      loadedOb.subscribe((loadedItemValue: T) => {
          // update in background
          if (loadedItemValue) {
            this.storageService.set(key, loadedItemValue, this.expirationMinutesMap[key]);
          }
        },
        // Need this to propagate the error to the calling function if the error happens immediately (as in the browser is offline)
        (err) => console.error('Error fetching from server', err));

      const memValue: T = <T>this.memMap[key];
      if (memValue) {
        // return immediately
        return Observable.of(_.cloneDeep(memValue));
      } else {
        // will have to wait
        return loadedOb;
      }
    }
  }

}
