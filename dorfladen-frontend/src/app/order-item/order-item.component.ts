import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../item.service';

@Component({
  selector: 'dlb-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input() item?: IItem;

  constructor() { }

  ngOnInit(): void {
  }

  public add(count: number): void {
    if (!this.item) {
      return;
    }
    this.item.count = Math.max(0, (this.item?.count || 0) + count);
  }

  public countUpdated(): void {
    if (this.item && this.item.count && this.item.count < 0) {
      this.item.count = 0;
    }
  }

}
