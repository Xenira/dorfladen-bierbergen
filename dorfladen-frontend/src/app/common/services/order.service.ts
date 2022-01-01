import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { IItem } from './item.service';
import * as brotliPromise from 'brotli-wasm';

export interface IOrderDetails {
  firstName: string;
  lastName: string;
  email: string;
  note: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  days: DateTime[] = [];
  items: IItem[] = [];
  orderDetails?: IOrderDetails;
  brotli?: {
    compress: (data: Uint8Array) => Uint8Array;
    decompress: (data: Uint8Array) => Uint8Array;
  };

  constructor() {
    // @ts-ignore
    brotliPromise.then((brotli) => (this.brotli = brotli));
  }

  setDates(days: DateTime[]) {
    this.days = days;
  }

  reset() {
    this.days = [];
  }

  // Compress data for qr code. Plain json with brotli seems to be most efficient
  // https://www.lucidchart.com/techblog/2019/12/06/json-compression-alternative-binary-formats-and-compression-methods/
  toBrotli(): Uint8Array | undefined {
    console.log(this.brotli);
    return this.brotli?.compress(
      Uint8Array.from(
        new TextEncoder().encode(
          JSON.stringify({
            days: this.days,
            items: this.items.map((i) => ({ id: i.id, count: i.count })),
            details: this.orderDetails,
          })
        )
      )
    );
  }

  fromBrotli(brotli: Uint8Array) {
    console.log(new TextDecoder().decode(this.brotli?.decompress(brotli)));
  }
}
