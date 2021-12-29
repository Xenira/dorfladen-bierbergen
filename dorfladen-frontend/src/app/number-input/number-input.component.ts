import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dlb-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {

  private _value?: number;
  @Input()
  get value(): number | undefined {
    return this._value;
  }
  set value(v: number | undefined) {
    this._value = v;
    this.valueChange.emit(v);
  }

  @Input() min?: number;
  @Input() max?: number;

  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public add(count: number): void {
    console.log('add', count)
    let newValue = (this.value || 0) + count;
    if (this.min) {
      newValue = Math.max(this.min, newValue);
    }
    if (this.max) {
      newValue = Math.min(this.max, newValue);
    }
    this.value = newValue;
    this.valueChange.emit(this.value);
  }

}
