import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum AlertMode {
  INFO,
  SUCCESS,
  WARNING,
  ERROR,
}

export interface IAlert {
  mode: AlertMode;
  text: string;
  icon?: string;
  timeout: number;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private queue: IAlert[] = [];

  public showAlert = new Subject<IAlert | undefined>();

  constructor() {}

  info(text: string, timeout = 10_000) {
    this.alert(AlertMode.INFO, text, timeout);
  }

  success(text: string, timeout = 10_000) {
    this.alert(AlertMode.SUCCESS, text, timeout);
  }

  warn(text: string, timeout = 10_000) {
    this.alert(AlertMode.WARNING, text, timeout);
  }

  error(text: string, timeout = 10_000) {
    this.alert(AlertMode.ERROR, text, timeout);
  }

  alert(mode: AlertMode, text: string, timeout = 10_000, icon?: string) {
    icon = icon || this.getIcon(mode);
    this.queue.push({ mode, text, icon, timeout });
    if (this.queue.length === 1) {
      this.show();
    }
  }

  private show() {
    const alert = this.queue.shift();
    this.showAlert.next(alert);
    if (!alert) {
      return;
    }

    setTimeout(() => this.show(), alert.timeout);
  }

  private getIcon(mode: AlertMode): string {
    switch (mode) {
      case AlertMode.INFO:
        return 'info-circle';
      case AlertMode.SUCCESS:
        return 'check-circle';
      case AlertMode.WARNING:
        return 'exclamation-circle';
      case AlertMode.ERROR:
        return 'times-circle';
    }
  }
}
