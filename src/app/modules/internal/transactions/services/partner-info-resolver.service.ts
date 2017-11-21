import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Collection} from '../../../../app.declaration';
import {Observable} from 'rxjs/Observable';
import {ParametersCacheService} from '../../../../services/parameters-cache.service';

@Injectable()
export class PartnerInfoResolverService implements Resolve<Collection<string[]>> {

  constructor(private parametersCacheService: ParametersCacheService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Collection<string[]>> {
    return this.parametersCacheService.findB2BPartnerInformations();
  }
}
