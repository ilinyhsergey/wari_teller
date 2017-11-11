import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select/select.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    SelectComponent,
    PaymentModeComponent
  ],
  declarations: [
    SelectComponent,
    PaymentModeComponent
  ]
})
export class AppComponentsModule { }
