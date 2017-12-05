import {Injectable} from '@angular/core';
import {Collection} from '../app.declaration';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';
import {TeardownLogic} from 'rxjs/src/Subscription';
import {Subscriber} from 'rxjs/src/Subscriber';

@Injectable()
export class BaseCacheService {

  private expirationMinutesMap: Collection<number> = environment.cacheExpirationMinutesMap;
  private memMap: Collection<Object> = {}; // used if cache expired (in memory)

  constructor(private storageService: StorageService) {
  }

  protected getExpiredCacheValue<T>(key: string, load: () => Observable<T>): Observable<T> {
    return Observable.create((subscriber: Subscriber<T>): TeardownLogic => {

      const itemValue: T = <T>this.storageService.get(key);
      if (itemValue) {

        // already cached
        this.memMap[key] = itemValue; // update if app just started
        subscriber.next(_.cloneDeep(itemValue));
        subscriber.complete();

      } else {

        const memValue: T = <T>this.memMap[key];
        if (memValue) {
          // return immediately
          subscriber.next(_.cloneDeep(memValue));
          subscriber.complete();
        }

        // if doesn't exist or expired
        load().subscribe((loadedItemValue: T) => {
          // update in background
          if (loadedItemValue) {
            this.storageService.set(key, loadedItemValue, this.expirationMinutesMap[key]);
            subscriber.next(loadedItemValue);
            subscriber.complete();
          }
        }, (error) => {
          // Need this to propagate the error to the calling function if the error happens immediately (as in the browser is offline)
          console.error('Error fetching from server', error);
          subscriber.next(error);
        });

      }

    });
  }

}

