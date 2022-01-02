import { ComponentRef, Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseModal } from './base-modal';

export interface IModal<T> {
  component: Type<BaseModal<T>>;
  data: any;
  ref?: BaseModal<T>;
  created: (ref: ComponentRef<T>) => void;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public modals: IModal<any>[] = [];

  constructor() {}

  openModal<T extends BaseModal<U>, U>(
    component: Type<T>,
    data: any = {}
  ): Observable<U> {
    return new Observable((subscriber) => {
      this.modals.push({
        component,
        data,
        created: (ref: ComponentRef<T>) =>
          ref.instance.onClose.subscribe(subscriber),
      });
    });
  }

  closeModal() {
    const modal = this.modals.pop();
    if (modal) {
      modal.ref?.close();
    }
  }
}
