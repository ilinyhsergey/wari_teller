import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {CanComponentDeactivate} from '../../model/CanComponentDeactivate';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor() {
  }

  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate
      ? component.canDeactivate()
      : true;
  }
}
