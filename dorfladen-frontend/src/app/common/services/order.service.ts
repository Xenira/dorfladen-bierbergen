import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  days: DateTime[] = [];

  constructor() {}

  setDates(days: DateTime[]) {
    this.days = days;
  }

  reset() {
    this.days = [];
  }
}
