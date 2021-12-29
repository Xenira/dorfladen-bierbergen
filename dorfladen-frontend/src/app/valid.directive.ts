import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
import { AbstractControl, FormControl, NgControl } from '@angular/forms';

@Directive({
  selector: '[dlbValid]',
})
export class ValidDirective implements AfterViewInit {
  private abstractControl?: AbstractControl | null;

  @HostListener('blur') onBlur() {
    this.setValidationStatus();
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private control: NgControl
  ) {}

  ngAfterViewInit(): void {
    this.abstractControl = this.control.control;
    if (!this.abstractControl) {
      console.error('Failed to load controll for', this.el);
      return;
    }

    this.abstractControl.statusChanges.subscribe(() =>
      this.setValidationStatus()
    );
  }

  private setValidationStatus() {
    if (this.abstractControl?.untouched) {
      return;
    }
    if (this.abstractControl?.invalid) {
      this.el.nativeElement.setAttribute('aria-invalid', 'true');
    } else {
      this.el.nativeElement.setAttribute('aria-invalid', 'false');
    }
  }
}
