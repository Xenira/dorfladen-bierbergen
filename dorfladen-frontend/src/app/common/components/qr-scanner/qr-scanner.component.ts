import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import jsQR, { QRCode } from 'jsqr';

@Component({
  selector: 'dlb-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss'],
})
export class QrScannerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('video') video?: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas?: ElementRef<HTMLCanvasElement>;

  @Input() minLength = 10;
  @Output() codeFound = new EventEmitter<QRCode>();

  public scanning?: boolean = undefined;

  private destroyed = false;
  private stream?: MediaStream;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.startVideo();
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    if (!this.video) {
      return;
    }
    this.video.nativeElement.pause();
    this.video.nativeElement.src = '';
    this.stream?.getTracks().forEach((t) => t.stop());
  }

  startVideo(): void {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' } })
      .then((stream) => {
        if (!this.video) {
          return;
        }
        this.stream = stream;

        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
        this.video.nativeElement.play();
        this.scanning = true;
        requestAnimationFrame(() => this.tick());
      });
  }

  tick() {
    if (!this.canvas || !this.video || this.destroyed) {
      return;
    }
    const canvasElement = this.canvas.nativeElement;
    const context = canvasElement.getContext('2d');

    if (
      this.video?.nativeElement.readyState ===
      this.video?.nativeElement.HAVE_ENOUGH_DATA
    ) {
      canvasElement.height = this.video?.nativeElement.videoHeight || 0;
      canvasElement.width = this.video?.nativeElement.videoWidth || 0;

      context?.drawImage(
        this.video.nativeElement,
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      var imageData = context?.getImageData(
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );

      if (imageData) {
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (code && code.binaryData.length > this.minLength) {
          this.scanning = false;
          this.codeFound.emit(code);
        }
      }
    }
    requestAnimationFrame(() => this.tick());
  }
}
