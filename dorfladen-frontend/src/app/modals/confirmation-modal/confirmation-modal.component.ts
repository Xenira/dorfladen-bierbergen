import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BaseModal } from 'src/app/modal/base-modal';
import { ModalService } from 'src/app/modal/modal.service';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'dlb-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent extends BaseModal<boolean> implements OnInit, AfterViewInit {

  @ViewChild('barcode') barcodeElement?: ElementRef<HTMLCanvasElement>;

  constructor(modalService: ModalService) {
    super(modalService);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      if (!this.barcodeElement) {
        return;
      }
      JsBarcode(this.barcodeElement.nativeElement, '229010001042', {format: "EAN13", height: 150});
  }

}
