import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/zip';

@Injectable()
export class UtilsService {

  constructor() { }

  collectArrOfOb2ObOfArr<T>(arrOfOb: Observable<T>[]): Observable<T[]> {
    return arrOfOb.reduce(
      (obOfArr, ob) => this.zipObservableIntoArr(obOfArr, ob),
      Observable.of([])
    );
  }

  zipObservableIntoArr<T>(obOfArr: Observable<T[]>, ob: Observable<T>): Observable<T[]> {
    return obOfArr.zip(ob).map((zipResult: [T[], T]): T[] => {
      const [arr, item] = zipResult;
      return arr.concat(item);
    });
  }

}
