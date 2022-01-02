import { Component, OnInit } from '@angular/core';
import {
  fadeInDownOnEnterAnimation,
  fadeOutUpOnLeaveAnimation,
} from 'angular-animations';
import { AlertMode, AlertService, IAlert } from '../../services/alert.service';

@Component({
  selector: 'dlb-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [fadeInDownOnEnterAnimation(), fadeOutUpOnLeaveAnimation()],
})
export class AlertComponent implements OnInit {
  public alert?: IAlert;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.showAlert.subscribe((alert) => {
      console.log(alert);
      this.alert = alert;
    });
  }

  getClass(): string {
    switch (this.alert?.mode) {
      case AlertMode.INFO:
        return 'info';
      case AlertMode.SUCCESS:
        return 'success';
      case AlertMode.WARNING:
        return 'warning';
      case AlertMode.ERROR:
        return 'error';
    }
    return '';
  }
}
