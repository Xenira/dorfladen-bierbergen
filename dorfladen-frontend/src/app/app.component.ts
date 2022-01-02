import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectionComponent } from './selection/selection.component';

@Component({
  selector: 'dlb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'dorfladen-frontend';
  admin = false;
  stage = 0;

  @ViewChild('demo') demo?: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.demo) {
        this.demo.nativeElement.remove();
      }
    }, 15_000);
  }

  activate(e: RouterOutlet) {
    switch (e.activatedRoute.component) {
      case DatepickerComponent:
        this.stage = 0;
        break;
      case SelectionComponent:
        this.stage = 1;
        break;
      case CheckoutComponent:
        this.stage = 2;
    }
  }
}
