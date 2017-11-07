import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {
  Http, RequestOptions, Headers,
  RequestOptionsArgs,
  Response
} from '@angular/http';

import {AuthService} from '../services/auth.service';

@Injectable()
export class HttpService {

  constructor(private http: Http,
              private authService: AuthService) {
  }

  request(url: string, options?: RequestOptionsArgs): Observable<Response> {
    // todo handle interceptions here
    const options1 = this.addAuthorization(options);
    return this.http.request(url, options1).map((response: Response): Response => {
      const responseAuthorization = response.headers.get('Authorization');
      if (responseAuthorization) {
        this.authService.setAuthorization(responseAuthorization);
      }
      return response;
    });
  }

  private addAuthorization(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) {
      options = new RequestOptions();
    }
    if (!options.headers) {
      options.headers = new Headers();
    }
    const authHeader = this.authService.getAuthorization();
    if (authHeader) {
      options.headers.set('Authorization', authHeader);
    }
    return options;
  }

}
