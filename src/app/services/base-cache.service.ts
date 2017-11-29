import {Injectable} from '@angular/core';
import {Collection} from '../app.declaration';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';

@Injectable()
export class BaseCacheService {

  private expirationMinutesMap: Collection<number> = environment.cacheExpirationMinutesMap;
  private memMap: Collection<Object> = {}; // used if cache expired (in memory)

  constructor(private storageService: StorageService) {
  }

  protected getExpiredCacheValue<T>(key: string, load: () => Observable<T>): Observable<T> {
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

