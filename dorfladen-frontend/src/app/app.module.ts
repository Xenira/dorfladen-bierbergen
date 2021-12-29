import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { PricePipe } from './price.pipe';
import { OrderModalComponent } from './modals/order-modal/order-modal.component';
import { SelectionComponent } from './selection/selection.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { WeekSelectComponent } from './week-select/week-select.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderItemComponent,
    PricePipe,
    ModalComponent,
    OrderModalComponent,
    SelectionComponent,
    DatepickerComponent,
    WeekSelectComponent,
    ConfirmationModalComponent,
    AdminMenuComponent,
    NumberInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
