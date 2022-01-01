import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BaseModal } from 'src/app/modal/base-modal';
import { ModalService } from 'src/app/modal/modal.service';
import * as JsBarcode from 'jsbarcode';
import * as QRCode from 'qrcode';
import { OrderService } from 'src/app/common/services/order.service';

@Component({
  selector: 'dlb-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent
  extends BaseModal<boolean>
  implements OnInit, AfterViewInit
{
  @ViewChild('barcode') barcodeElement?: ElementRef<HTMLCanvasElement>;
  @ViewChild('qrCode') qrCodeElement?: ElementRef<HTMLCanvasElement>;

  constructor(modalService: ModalService, private orderService: OrderService) {
    super(modalService);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.barcodeElement) {
      return;
    }
    JsBarcode(this.barcodeElement.nativeElement, '229010001042', {
      format: 'EAN13',
      height: 150,
    });

    const brotli = this.orderService.toBrotli();
    console.log(brotli);
    QRCode.toCanvas(this.qrCodeElement?.nativeElement, [
      // @ts-ignore
      { data: brotli, mode: 'byte' },
    ]);
    if (brotli) this.orderService.fromBrotli(brotli);
  }
}
