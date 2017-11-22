import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {
  Http, RequestOptions, Headers,
  RequestOptionsArgs,
  Response
} from '@angular/http';

import {AuthService} from '../services/auth.service';

@Injectable()
export class HttpService {

  constructor(private http: Http,
              private authService: AuthService,
              private router: Router) {
  }

  request(url: string, options?: RequestOptionsArgs): Observable<Response> {
    const options1 = this.addAuthorization(options);
    const observable: Observable<Response> = this.http.request(url, options1);

    observable.subscribe(null, (response: Response) => {
      if (response.status === 401) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });

    return observable.pipe(
      map((response: Response): Response => {
        const responseAuthorization = response.headers.get('Authorization');
        if (responseAuthorization) {
          this.authService.setAuthorization(responseAuthorization);
        }
        return response;
      })
    );
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
