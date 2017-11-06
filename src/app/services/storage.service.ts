import {Injectable} from '@angular/core';
import * as lscache from 'lscache';
import {Collection} from '../app.declaration';

@Injectable()
export class StorageService {

  private isLocalStorageProvided: boolean;
  private storage: Collection<Object> = {};

  constructor() {
    this.isLocalStorageProvided = this.ifLocalStorageProvided();
    if (!this.isLocalStorageProvided) {
      console.warn('LocalStorage is not available. In-memory storage will be used.');
    }
  }

  set(key: string, value: Object | string, time?: number): void {
    if (this.isLocalStorageProvided) {
      lscache.set(key, value, time);
    } else {
      this.storage[key] = value;
    }
  }

  get(key: string): string | Object {
    if (this.isLocalStorageProvided) {
      return lscache.get(key);
    } else {
      return this.storage[key];
    }
  }

  remove(key: string): void {
    if (this.isLocalStorageProvided) {
      lscache.remove(key);
    } else {
      delete this.storage[key];
    }
  }

  supported(): boolean {
    return lscache.supported();
  }

  flush(): void {
    if (this.isLocalStorageProvided) {
      return lscache.flush();
    } else {
      this.storage = {};
    }
  }

  flushExpired(): void {
    return lscache.flushExpired();
  }

  setBucket(bucket: string): void {
    return lscache.setBucket(bucket);
  }

  resetBucket(): void {
    return lscache.resetBucket();
  }

  enableWarnings(enabled: boolean) {
    return lscache.enableWarnings(enabled);
  }


  /**
   * Safari doesn't provide localStorage in private mode
   * @returns {boolean}
   */
  ifLocalStorageProvided(): boolean {
    if (window.localStorage) {
      const test = '__localstoragetest__';

      try {
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
      } catch (ex) {
        console.log('No storage for you!');
        return false;
      }

      return true;
    }

    return false;
  }

}
