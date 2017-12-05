import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/src/Subscriber';

import {BaseCacheService} from './base-cache.service';
import {StorageService} from './storage.service';
import {environment} from '../../environments/environment';
import {Collection} from '../app.declaration';
import {Translatable} from '../model/Translatable';

@Injectable()
export class TranslationService extends BaseCacheService {

  private translationFileTemplateUrl = 'translation.${lang}.json';
  private translation: Observable<Collection<string>>;

  constructor(private http: HttpClient,
              storageService: StorageService) {
    super(storageService);

    this.loadTranslation(environment.lang);
  }

  getTranslation(): Observable<Collection<string>> {
    return this.translation || (this.translation = this.loadTranslation(environment.lang));
  }

  translateList(translatablesOb: Observable<Translatable[]>): Observable<any[]> {
    return Observable.create((subscriber: Subscriber<Translatable[]>) => {
      this.getTranslation().subscribe((dictionary: Collection<string>) => {
        translatablesOb.subscribe((items: Translatable[]) => {
          items.forEach((item: Translatable) => {
            item.name = dictionary[item.label];
          });
          subscriber.next(items);
          subscriber.complete();
        });
      });
    });
  }

  private loadTranslation(lang: string): Observable<Collection<string>> {
    const fileName = this.translationFileTemplateUrl.replace('${lang}', lang);
    return this.getExpiredCacheValue(fileName, (): Observable<Collection<string>> => {
      const url = '/assets/translation/' + fileName;
      return this.http.get(url) as Observable<Collection<string>>;
    });
  }

}
