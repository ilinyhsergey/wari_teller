import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SelectComponent } from './select/select.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ModeSelectorComponent } from './mode-selector/mode-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    SelectComponent,
    PaymentModeComponent,
    SideNavComponent,
    ModeSelectorComponent
  ],
  declarations: [
    SelectComponent,
    PaymentModeComponent,
    SideNavComponent,
    ModeSelectorComponent
  ]
})
export class AppComponentsModule { }
