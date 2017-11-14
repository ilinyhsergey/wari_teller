import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InternalRoutingModule} from './internal-routing.module';
import {InternalComponent} from './internal/internal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    InternalRoutingModule
  ],
  declarations: [
    InternalComponent,
    HomeComponent
  ]
})
export class InternalModule {
}
