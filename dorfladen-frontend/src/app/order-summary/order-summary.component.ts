import { Component, OnInit } from '@angular/core';
import { IItem } from '../common/services/item.service';
import { OrderService } from '../common/services/order.service';

@Component({
  selector: 'dlb-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  public items: IItem[] = [];
  public days: number = 1;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.items = this.orderService.items;
    this.days = this.orderService.days.length;
  }

  totalCount(): number {
    return this.items.reduce(
      (prev, curr) => prev + (curr.count || 0) * this.days,
      0
    );
  }

  totalPrice(): number {
    return this.orderService.totalPrice();
  }
}
