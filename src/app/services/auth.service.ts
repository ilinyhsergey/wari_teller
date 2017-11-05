import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {UserApi} from '../api/api/UserApi';
import {LoginCredentials} from '../api/model/LoginCredentials';

@Injectable()
export class AuthService {

  constructor(private userApi: UserApi) {
  }

  login(loginCredentials: LoginCredentials): Observable<boolean> {

    const observable = this.userApi.userLoginPost1(loginCredentials);
    observable.subscribe((res) => {
      console.log('res', res);
    }, (err) => {
      console.log('err', err);
    });

    return observable.map((res) => true);
  }

}
