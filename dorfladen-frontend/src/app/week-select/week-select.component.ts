import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateTime, WeekdayNumbers } from 'luxon';

@Component({
  selector: 'dlb-week-select',
  templateUrl: './week-select.component.html',
  styleUrls: ['./week-select.component.scss']
})
export class WeekSelectComponent implements OnInit {

  @Input() date?: DateTime;

  @Input() selected: WeekdayNumbers[] = [];
  @Output() selectedChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  toggle(day: WeekdayNumbers) {
    if (!this.selected.includes(day)) {
      this.selected.push(day);
    } else {
      this.selected.splice(this.selected.indexOf(day), 1);
    }
  }

}
