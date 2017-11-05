import {NgModule} from '@angular/core';

import {UserApi} from './api/UserApi';
import {TransactionApi} from './api/TransactionApi';
import {TestApi} from './api/TestApi';
import {ReportApi} from './api/ReportApi';
import {ParameterApi} from './api/ParameterApi';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [ParameterApi, ReportApi, TestApi, TransactionApi, UserApi]
})
export class ApiModule {
}
