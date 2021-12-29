import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseModal } from '../../modal/base-modal';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'dlb-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent extends BaseModal<void> implements OnInit {
  orderForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email]],
    note: [''],
    privacy: ['', [Validators.requiredTrue]],
  });

  constructor(modalService: ModalService, private fb: FormBuilder) {
    super(modalService);
  }

  ngOnInit(): void {}
}
