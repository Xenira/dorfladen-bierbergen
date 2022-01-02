import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../modal/modal.service';
import { OrderService } from '../common/services/order.service';
import { ICategory, IItem, ItemService } from '../common/services/item.service';
import {
  fadeOutLeftAnimation,
  slideInRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
} from 'angular-animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'dlb-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  animations: [
    slideInUpOnEnterAnimation({ duration: 800 }),
    fadeOutLeftAnimation({ duration: 400 }),
    slideInRightOnEnterAnimation(),
  ],
})
export class SelectionComponent implements OnInit {
  categories: ICategory[] = [];
  slideOut = false;

  constructor(
    private itemService: ItemService,
    public orderService: OrderService,
    private router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    if (!this.orderService.days.length) {
      this.router.navigateByUrl('/date');
    }
    this.categories = this.itemService.getItems();
  }

  allItems(): IItem[] {
    const items: IItem[] = [];
    this.categories.forEach((c) => items.push(...c.items));
    return items;
  }

  totalCount(): number {
    return this.allItems().reduce((prev, curr) => prev + (curr.count || 0), 0);
  }

  totalPrice(): number {
    const days = this.orderService.days.length;
    return (
      this.allItems().reduce(
        (prev, curr) => prev + (curr.count || 0) * curr.price,
        0
      ) * days
    );
  }

  reset(): void {
    this.categories.forEach((c) =>
      c.items.forEach((i) => (i.count = undefined))
    );
  }

  order(): void {
    this.orderService.items = this.allItems().filter((i) => i.count);
    this.slideOut = true;
  }

  navigate(event: AnimationEvent) {
    if ((event.toState as unknown) === true) {
      this.router.navigateByUrl('/checkout');
    }
  }
}
