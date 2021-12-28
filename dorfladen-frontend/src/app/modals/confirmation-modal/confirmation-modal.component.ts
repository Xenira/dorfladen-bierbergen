import { Component, OnInit } from '@angular/core';
import { BaseModal } from 'src/app/modal/base-modal';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'dlb-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent extends BaseModal<boolean> implements OnInit {

  constructor(modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
  }

}
