import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {zip, map} from 'rxjs/operators';
import {ErrorResponse} from '../api/generated';

@Injectable()
export class UtilsService {

  constructor() {
  }

  collectArrOfOb2ObOfArr<T>(arrOfOb: Observable<T>[]): Observable<T[]> {
    return arrOfOb.reduce(
      (obOfArr, ob) => this.zipObservableIntoArr(obOfArr, ob),
      Observable.of([])
    );
  }

  zipObservableIntoArr<T>(obOfArr: Observable<T[]>, ob: Observable<T>): Observable<T[]> {
    return obOfArr.pipe(
      zip(ob),
      map((zipResult: [T[], T]): T[] => {
        const [arr, item] = zipResult;
        return arr.concat(item);
      })
    );
  }

  fillErrorResponseMessage(errorResponse: ErrorResponse): string {
    const params: string[] = errorResponse.params || [];
    const message: string = errorResponse.message || '';
    return params.reduce((res: string, param: string, id: number): string => {
      return res.replace(`{${id}}`, param);
    }, message);
  }
}
