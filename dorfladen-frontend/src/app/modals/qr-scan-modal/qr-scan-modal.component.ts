import { Component, OnInit } from '@angular/core';
import { BaseModal } from 'src/app/modal/base-modal';
import { QRCode } from 'jsqr';
import { ModalService } from 'src/app/modal/modal.service';

@Component({
  selector: 'dlb-qr-scan-modal',
  templateUrl: './qr-scan-modal.component.html',
  styleUrls: ['./qr-scan-modal.component.scss'],
})
export class QrScanModalComponent extends BaseModal<QRCode> implements OnInit {
  constructor(modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {}

  codeFound(code: QRCode) {
    this.close(code);
  }
}
