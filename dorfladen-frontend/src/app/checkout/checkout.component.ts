import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { slideInRightOnEnterAnimation } from 'angular-animations';
import { ModalService } from '../modal/modal.service';
import { ConfirmationModalComponent } from '../modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'dlb-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [slideInRightOnEnterAnimation()],
})
export class CheckoutComponent implements OnInit {
  orderForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.email]],
    note: [''],
    privacy: ['', [Validators.requiredTrue]],
  });

  constructor(private fb: FormBuilder, private modalService: ModalService) {}

  ngOnInit(): void {}

  back() {}
  order() {
    this.modalService
      .openModal<ConfirmationModalComponent, boolean>(
        ConfirmationModalComponent,
        {}
      )
      .subscribe(() => {});
  }
}
