import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QRCode } from 'jsqr';
import { DateTime, WeekdayNumbers } from 'luxon';
import { InactivityService } from '../common/services/inactivity.service';
import { OrderService } from '../common/services/order.service';
import { ModalService } from '../modal/modal.service';
import { QrScanModalComponent } from '../modals/qr-scan-modal/qr-scan-modal.component';
import { environment } from '../../environments/environment';
import { AlertService } from '../common/services/alert.service';
import {
  fadeOutLeftAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
} from 'angular-animations';
import { AnimationEvent } from '@angular/animations';

interface AboWeek {
  date: DateTime;
  days: WeekdayNumbers[];
}

@Component({
  selector: 'dlb-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  animations: [
    slideInRightOnEnterAnimation(),
    fadeOutLeftAnimation({ duration: 400 }),
    slideInUpOnEnterAnimation({ duration: 600 }),
  ],
})
export class DatepickerComponent implements OnInit {
  minDate = DateTime.now().plus({ days: 1 }).toISODate();
  isAbo = false;
  environment = environment;
  slideOut = false;

  private _startDate?: string;
  set startDate(value: string | undefined) {
    this._startDate = value;
    if (this._startDate) {
      this.inactivityService.start();
      this.recalculateDates(this._startDate);
    }
  }
  get startDate(): string | undefined {
    return this._startDate;
  }

  private _aboLength = 4;
  set aboLength(value: number) {
    this._aboLength = value;
    this.lengthChange();
  }
  get aboLength(): number {
    return this._aboLength;
  }

  aboWeeks: AboWeek[] = [];

  constructor(
    private orderService: OrderService,
    private router: Router,
    private inactivityService: InactivityService,
    private modalService: ModalService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  public cancel(): void {
    this.startDate = undefined;
    this.aboWeeks = [];
    this.aboLength = 4;
    this.isAbo = false;
    this.inactivityService.stop();
  }

  public recalculateDates(newDate: string): void {
    if (this.aboWeeks.length === 0) {
      this.lengthChange();
    }
    if (this.aboWeeks.length === 0) {
      return;
    }

    const newDateTime = DateTime.fromISO(newDate);
    const firstDate = this.aboWeeks[0].date;
    const diff = newDateTime.diff(firstDate);

    this.aboWeeks.forEach((w) => {
      w.date = w.date.plus(diff);
    });
  }

  lengthChange(): void {
    if (!this.startDate || !this.aboLength) {
      return;
    }
    const startDate = DateTime.fromISO(this.startDate);
    while (this.aboWeeks.length < this.aboLength) {
      const lastWeek: AboWeek = this.aboWeeks.length
        ? this.aboWeeks[this.aboWeeks.length - 1]
        : {
            date: startDate.minus({
              week: 1,
            }),
            days: [startDate.weekday],
          };

      this.aboWeeks.push({
        date: lastWeek.date.plus({ week: 1 }),
        days: JSON.parse(JSON.stringify(lastWeek.days)),
      });
    }
    while (this.aboWeeks.length > this.aboLength) {
      this.aboWeeks.pop();
    }
  }

  totalDays(): number {
    return this.aboWeeks.reduce((prev, curr) => prev + curr.days.length, 0);
  }

  selectProducts(): void {
    if (!this.startDate) {
      return;
    }
    this.orderService.setDates(
      this.isAbo
        ? this.aboWeeks.reduce<DateTime[]>((prev, curr) => {
            prev.push(
              ...curr.days.map((d) =>
                curr.date.startOf('week').plus({ days: d - 1 })
              )
            );
            return prev;
          }, [])
        : [DateTime.fromISO(this.startDate)]
    );
    this.slideOut = true;
  }

  navigate(event: AnimationEvent) {
    if ((event.toState as unknown) === true) {
      this.router.navigateByUrl('/select');
    }
  }

  scanQr(): void {
    this.modalService
      .openModal<QrScanModalComponent, QRCode>(QrScanModalComponent)
      .subscribe((code) => {
        console.log(code);
        if (code) {
          this.alertService.info('QR-Code erfolgreich gelesen.');
        } else {
          this.alertService.warn('QR-Code nicht gelesen.');
        }
      });
  }
}
