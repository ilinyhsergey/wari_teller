import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {PieceType} from '../../../../api/generated/model/PieceType';
import {ParametersCacheService} from '../../../../services/parameters-cache.service';

@Injectable()
export class AllPieceTypesResolverService implements Resolve<PieceType[]> {

  constructor(private parametersCacheService: ParametersCacheService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PieceType[]> {
    return this.parametersCacheService.getAllPieceTypes();
  }
}
