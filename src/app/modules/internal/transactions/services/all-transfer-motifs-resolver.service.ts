import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {ParametersCacheService} from '../../../../services/parameters-cache.service';
import {Motif} from '../../../../api/generated';

@Injectable()
export class AllTransferMotifsResolverService implements Resolve<Motif[]> {

  constructor(private parametersCacheService: ParametersCacheService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Motif[]> {
    return this.parametersCacheService.getAllTransferMotifs();
  }
}
