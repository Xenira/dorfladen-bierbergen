import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory, IItem, ItemService } from '../item.service';
import { ModalService } from '../modal/modal.service';
import { ConfirmationModalComponent } from '../modals/confirmation-modal/confirmation-modal.component';
import { OrderModalComponent } from '../modals/order-modal/order-modal.component';
import { OrderService } from '../order.service';

@Component({
  selector: 'dlb-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  categories: ICategory[] = [];

  constructor(private itemService: ItemService, private orderService: OrderService, private router: Router, private modalService: ModalService) {}

  ngOnInit(): void {
    if (!this.orderService.days.length) {
      this.router.navigateByUrl('/date')
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
    return this.allItems().reduce((prev, curr) => prev + (curr.count || 0) * curr.price, 0);
  }

  reset(): void {
    this.categories.forEach((c) => c.items.forEach(i => i.count = undefined))
  }

  order(): void {
    this.modalService.openModal<OrderModalComponent, void>(OrderModalComponent, {}).subscribe(() => {
      console.log('modal closed')
      this.modalService.openModal<ConfirmationModalComponent, boolean>(ConfirmationModalComponent, {}).subscribe(() => {});
    })
  }
}
