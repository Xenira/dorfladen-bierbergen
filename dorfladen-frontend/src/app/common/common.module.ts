import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { PricePipe } from './pipes/price.pipe';
import { ValidDirective } from './directives/valid.directive';
import { TimerComponent } from './components/timer/timer.component';
import { TimerPipe } from './pipes/timer.pipe';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    PricePipe,
    ValidDirective,
    TimerComponent,
    TimerPipe,
    QrScannerComponent,
    NotificationComponent,
    AlertComponent,
  ],
  imports: [NgCommonModule],
  exports: [
    PricePipe,
    ValidDirective,
    TimerComponent,
    QrScannerComponent,
    AlertComponent,
  ],
})
export class CommonModule {}
