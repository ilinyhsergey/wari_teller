import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {AuthService} from '../auth.service';
import {RedirectService} from '../redirect.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
              private router: Router,
              private redirectService: RedirectService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isUserLoggedIn(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isUserLoggedIn(state.url);
  }

  isUserLoggedIn(url?: string): boolean {
    const isLoggedIn = this.authService.isUserLoggedIn();
    if (!isLoggedIn) {
      this.authService.logout();
      if (url) {
        this.redirectService.setRedirectUrl(url);
      }
      this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }

}
