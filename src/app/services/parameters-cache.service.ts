import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

import {ParameterApi} from '../api/generated/api/ParameterApi';
import {B2BPartnerInformation} from '../api/generated/model/B2BPartnerInformation';
import {Collection} from '../app.declaration';
import {GeoZone} from '../api/generated/model/GeoZone';

@Injectable()
export class ParametersCacheService {

  private allCountries: GeoZone[]; // todo temporary cache impl
  private partnerCode2PartnerName: Collection<string[]>; // todo temporary cache impl

  constructor(private parameterApi: ParameterApi) {
  }

  getAllCountries(): Observable<GeoZone[]> {
    const observable: Observable<GeoZone[]> = this.parameterApi.getAllCountriesGet1();
    observable.subscribe((allCountries: GeoZone[]) => {
      this.allCountries = allCountries;
    });

    if (this.allCountries) {
      return Observable.of(this.allCountries);
    } else {
      return observable;
    }
  }

  /**
   * @returns {Observable<Collection<string>>} - a map code -> name
   */
  findB2BPartnerInformations(): Observable<Collection<string[]>> {
    const observable: Observable<Collection<string[]>> = this.parameterApi.findB2BPartnerInformationsGet1()
      .map((infos: B2BPartnerInformation[]): Collection<string[]> => {
        const map = infos.reduce((res: Collection<string[]>, info: B2BPartnerInformation) => {
          const arr = res[info.code] || (res[info.code] = []);
          arr.push(info.name);
          return res;
        }, {});
        this.partnerCode2PartnerName = map;
        return map;
      });

    if (this.partnerCode2PartnerName) {
      return Observable.of(this.partnerCode2PartnerName);
    } else {
      return observable;
    }
  }

}
