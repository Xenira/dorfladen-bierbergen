import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dlb-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  private _value?: number;
  @Input()
  get value(): number | undefined {
    return this._value;
  }
  set value(v: number | undefined) {
    v = v || 0;
    if (this.min !== undefined) {
      v = Math.max(this.min, v);
    }
    if (this.max !== undefined) {
      v = Math.min(this.max, v);
    }
    this._value = v || undefined;
    this.valueChange.emit(v);
  }

  @Input() min?: number;
  @Input() max?: number;

  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public add(count: number): void {
    this.value = (this.value || 0) + count;
  }
}
