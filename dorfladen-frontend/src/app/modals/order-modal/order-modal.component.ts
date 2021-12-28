import { Component, OnInit } from '@angular/core';
import { BaseModal } from '../../modal/base-modal';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'dlb-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent extends BaseModal<void> implements OnInit {

  constructor(modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
  }

}
