import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {LoginCredentials} from '../models/login-credentials';

@Injectable()
export class AuthService {

  constructor() {
  }

  login(cred: LoginCredentials): Observable<boolean> {
    if (cred.login && cred.password && cred.specialPassword){
      return Observable.of(true);
    } else {
      return Observable.throw(null);
    }
  }

}
