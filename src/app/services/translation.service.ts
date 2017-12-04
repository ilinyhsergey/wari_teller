import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseCacheService} from './base-cache.service';
import {StorageService} from './storage.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Collection} from '../app.declaration';

@Injectable()
export class TranslationService extends BaseCacheService {

  private translationFileTemplateUrl = 'translation.${lang}.json';
  private translationMap: Collection<string>;

  constructor(private http: HttpClient,
              storageService: StorageService) {
    super(storageService);

    this.initTranslation(environment.lang);
  }

  initTranslation(lang: string) {
    this.loadTranslation(lang).subscribe(value => {
      this.translationMap = value;
    });
  }

  loadTranslation(lang: string): Observable<Collection<string>> {
    const fileName = this.translationFileTemplateUrl.replace('${lang}', lang);

    return this.getExpiredCacheValue(fileName, (): Observable<Collection<string>> => {
      const url = '/assets/translation/' + fileName;
      return this.http.get(url) as Observable<Collection<string>>;
    });
  }

  getTranslation(): Collection<string> {
    return this.translationMap;
  }

}
