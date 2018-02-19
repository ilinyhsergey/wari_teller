import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SelectComponent} from './select/select.component';
import {PaymentModeComponent} from './payment-mode/payment-mode.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {ModeSelectorComponent} from './mode-selector/mode-selector.component';
import {NgbDateStructToDatePipe} from './services/ngb-date-struct-to-date.pipe';
import {DateToNgbDateStructPipe} from './services/date-to-ngb-date-struct.pipe';
import {
  AppDropActiveDirective, AppDropDirective, AppDropMenuDirective,
  AppDropToggleDirective
} from './app-drop/app-drop.directive';
import {StructToDateService} from './services/struct-to-date.service';

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
    ModeSelectorComponent,
    NgbDateStructToDatePipe,
    DateToNgbDateStructPipe,
    AppDropMenuDirective, AppDropToggleDirective, AppDropDirective, AppDropActiveDirective
  ],
  declarations: [
    SelectComponent,
    PaymentModeComponent,
    SideNavComponent,
    ModeSelectorComponent,
    NgbDateStructToDatePipe,
    DateToNgbDateStructPipe,
    AppDropMenuDirective, AppDropToggleDirective, AppDropDirective, AppDropActiveDirective
  ],
  providers: [
    NgbDateStructToDatePipe,
    DateToNgbDateStructPipe,
    StructToDateService,
  ]
})
export class AppComponentsModule {
}
