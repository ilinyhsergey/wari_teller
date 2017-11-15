import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

import {ParameterApi} from '../api/generated/api/ParameterApi';
import {B2BPartnerInformation} from '../api/generated/model/B2BPartnerInformation';
import {Collection} from '../app.declaration';

@Injectable()
export class ParametersCacheService {

  private partnerCode2PartnerName: Collection<string[]>; // todo temporary cache impl

  constructor(private parameterApi: ParameterApi) {
  }

  /**
   * @returns {Observable<Collection<string>>} - a map code -> name
   */
  findB2BPartnerInformations(): Observable<Collection<string[]>> {
    if (this.partnerCode2PartnerName) {
      return Observable.of(this.partnerCode2PartnerName);
    }
    const observable: Observable<B2BPartnerInformation[]> = this.parameterApi.findB2BPartnerInformationsGet1();
    return observable.map((infos: B2BPartnerInformation[]): Collection<string[]> => {

      console.log('infos', infos); // todo

      const map = infos.reduce((res: Collection<string[]>, info: B2BPartnerInformation) => {
        const arr = res[info.code] || (res[info.code] = []);
        arr.push(info.name);
        return res;
      }, {});

      console.log('map', map); // todo

      this.partnerCode2PartnerName = map;
      return map;
    });
  }

}
