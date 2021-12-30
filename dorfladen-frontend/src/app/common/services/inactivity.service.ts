import { Injectable, OnDestroy, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InactivityService implements OnDestroy {
  private timeout = 5 * 60_000;
  private userActivity!: number;
  private inactiveSince = new Date().getTime();
  isInactive = false;
  userInactive = new Subject<boolean>();
  inactiveTimer = new Subject<number>();

  constructor(private rendererFactory2: RendererFactory2) {
    this.rendererFactory2
      .createRenderer(null, null)
      .listen(window, 'mousemove', () => this.reset());
  }

  ngOnDestroy(): void {
    this.stop();
  }

  public start(timeout = 5 * 60_000): void {
    this.timeout = timeout;
    this.reset();
    this.continue();
  }

  public continue(): void {
    this.userActivity = setInterval(() => {
      const inactiveFor = new Date().getTime() - this.inactiveSince;
      if (inactiveFor > this.timeout) {
        this.userInactive.next(true);
      } else {
        this.inactiveTimer.next(this.timeout - inactiveFor);
      }
    }, 1_000) as unknown as number;
  }

  public stop(): void {
    clearInterval(this.userActivity);
  }

  public reset(): void {
    this.inactiveSince = new Date().getTime();
  }
}
