import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: 'date', component: DatepickerComponent },
  { path: 'select', component: SelectionComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: 'date', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
