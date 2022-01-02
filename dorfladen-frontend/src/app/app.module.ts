import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderModalComponent } from './modals/order-modal/order-modal.component';
import { SelectionComponent } from './selection/selection.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { WeekSelectComponent } from './week-select/week-select.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from './common/common.module';
import { QrScanModalComponent } from './modals/qr-scan-modal/qr-scan-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemComponent,
    ModalComponent,
    OrderModalComponent,
    SelectionComponent,
    DatepickerComponent,
    WeekSelectComponent,
    ConfirmationModalComponent,
    AdminMenuComponent,
    NumberInputComponent,
    QrScanModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
