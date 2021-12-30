import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InactivityService } from '../../services/inactivity.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'dlb-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  public time?: number;
  public minTime = 4 * 60_000;

  constructor(
    private router: Router,
    private inactivityService: InactivityService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.inactivityService.inactiveTimer.subscribe(
      (time) => (this.time = time)
    );

    this.inactivityService.userInactive.subscribe(() => {
      this.router.navigateByUrl('/date');
      this.orderService.reset();
      this.inactivityService.stop();
      this.time = undefined;
    });
  }
}
