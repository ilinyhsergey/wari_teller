import {NgModule} from '@angular/core';

import {UserApi} from './generated/api/UserApi';
import {TransactionApi} from './generated/api/TransactionApi';
import {TestApi} from './generated/api/TestApi';
import {ReportApi} from './generated/api/ReportApi';
import {ParameterApi} from './generated/api/ParameterApi';
import {HttpService} from './http.service';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    HttpService,
    ParameterApi,
    ReportApi,
    TestApi,
    TransactionApi,
    UserApi
  ]
})
export class ApiModule {
}
