import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../common/services/item.service';

@Component({
  selector: 'dlb-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input() item?: IItem;

  constructor() {}

  ngOnInit(): void {}
}
