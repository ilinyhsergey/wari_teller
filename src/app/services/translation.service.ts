import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/src/Subscriber';

import {BaseCacheService} from './base-cache.service';
import {StorageService} from './storage.service';
import {environment} from '../../environments/environment';
import {Collection} from '../app.declaration';
import {Translatable} from '../model/Translatable';

export const BASE_HREF = new InjectionToken('baseHref');

@Injectable()
export class TranslationService extends BaseCacheService {

  private baseHref: string;
  private translationFileTemplateUrl = 'translation.${lang}.json';
  private translation: Collection<string> = {};

  constructor(private http: HttpClient,
              @Optional()@Inject(BASE_HREF) baseHref: string,
              storageService: StorageService) {
    super(storageService);

    this.baseHref = baseHref;
  }

  initTranslation(): Observable<Collection<string>> {
    const observable = this.loadTranslation(environment.lang);
    observable.subscribe((translation: Collection<string>) => {
      this.translation = translation;
    });
    return observable;
  }

  translateObservableOfArr(translatablesOb: Observable<Translatable[]>): Observable<any[]> {
    return Observable.create((subscriber: Subscriber<Translatable[]>) => {
      translatablesOb.subscribe((items: Translatable[]) => {
        subscriber.next(this.translateArr(items));
        subscriber.complete();
      });
    });
  }

  translateArr(items: Translatable[]): any[] {
    const dictionary: Collection<string> = this.translation;
    items.forEach((item: Translatable) => {
      item.name = dictionary[item.label];
    });
    return items;
  }

  translateByCode(code: string, fallbackText: string): string {
    if (!this.translation) {
      console.error('Translation not initialized');
      return fallbackText;
    }
    const translatedText = this.translation[code];
    if (!translatedText) {
      console.error(`Translation not found for code: "${code}"`);
      return fallbackText;
    }
    return translatedText;
  }

  private loadTranslation(lang: string): Observable<Collection<string>> {
    const fileName = this.translationFileTemplateUrl.replace('${lang}', lang);
    return this.getExpiredCacheValue(fileName, (): Observable<Collection<string>> => {
      const url = `${this.baseHref}assets/translation/${fileName}`;
      return this.http.get(url) as Observable<Collection<string>>;
    });
  }

}
