import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateTime, WeekdayNumbers } from 'luxon';
import { InactivityService } from '../common/services/inactivity.service';
import { OrderService } from '../common/services/order.service';

interface AboWeek {
  date: DateTime;
  days: WeekdayNumbers[];
}

@Component({
  selector: 'dlb-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  minDate = DateTime.now().plus({ days: 1 }).toISODate();
  isAbo = false;

  private _startDate?: string;
  set startDate(value: string | undefined) {
    this._startDate = value;
    if (this._startDate) {
      this.inactivityService.start();
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
    private inactivityService: InactivityService
  ) {}

  ngOnInit(): void {}

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

    this.router.navigateByUrl('/select');
  }
}
