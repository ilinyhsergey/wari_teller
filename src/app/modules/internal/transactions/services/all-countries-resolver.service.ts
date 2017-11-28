import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {GeoZone} from '../../../../api/generated/model/GeoZone';
import {Observable} from 'rxjs/Observable';
import {ParametersCacheService} from '../../../../services/parameters-cache.service';

@Injectable()
export class AllCountriesResolverService implements Resolve<GeoZone[]> {

  constructor(private parametersCacheService: ParametersCacheService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GeoZone[]> | Promise<GeoZone[]> | GeoZone[] {
    return this.parametersCacheService.getAllCountries();
  }
}
