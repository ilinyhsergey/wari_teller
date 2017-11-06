import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  Http,
  RequestOptionsArgs,
  Response
} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  request(url: string, options?: RequestOptionsArgs): Observable<Response> {
    // todo handle interceptions here
    return this.http.request(url, options);
  }

}
