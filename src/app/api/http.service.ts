import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {
  Http, RequestOptions, Headers,
  RequestOptionsArgs,
  Response
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TeardownLogic} from 'rxjs/src/Subscription';
import {Subscriber} from 'rxjs/src/Subscriber';

import {AuthService} from '../services/auth.service';

@Injectable()
export class HttpService {

  constructor(private http: Http,
              private authService: AuthService,
              private router: Router) {
  }

  request(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return Observable.create((subscriber: Subscriber<Response>): TeardownLogic => {

      const options1 = this.addAuthorization(options);
      const observable = this.http.request(url, options1);

      observable.subscribe((response: Response) => {
        this.saveAuthorization(response);

        subscriber.next(response);
        subscriber.complete();
      }, (response: Response) => {
        this.handleErrors(response);

        subscriber.error(response);
      });
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

  private saveAuthorization(response: Response): void {
    const responseAuthorization = response.headers.get('Authorization');
    if (responseAuthorization) {
      this.authService.setAuthorization(responseAuthorization);
    }
  }

  private handleErrors(response: Response): void {
    if (response.status === 401) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

}
