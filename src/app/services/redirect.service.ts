import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable()
export class RedirectService {

  public redirectUrlKey = 'redirectUrl';

  constructor(private storageService: StorageService) {
  }

  setRedirectUrl(url: string) {
    this.storageService.set(this.redirectUrlKey, url);
  }

  getAndClearRedirectUrl(flush: boolean = true) {
    const redirectUrl = this.storageService.get(this.redirectUrlKey);
    if (flush) {
      this.clearRedirectUrl();
    }
    return redirectUrl;

  }

  clearRedirectUrl() {
    this.storageService.remove(this.redirectUrlKey);
  }

}
