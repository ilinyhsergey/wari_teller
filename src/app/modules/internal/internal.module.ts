import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {InternalRoutingModule} from './internal-routing.module';
import {InternalComponent} from './internal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    InternalRoutingModule
  ],
  declarations: [
    InternalComponent
  ]
})
export class InternalModule {
}
