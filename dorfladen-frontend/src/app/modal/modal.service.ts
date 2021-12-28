import { Component, ComponentRef, Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BaseModal } from './base-modal';

export interface IModal<T> {
  component: Type<any>,
  data: any;
  created: (ref: ComponentRef<T>) => void;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public modals: IModal<any>[] = [];

  constructor() { }

  openModal<T extends BaseModal<U>, U>(component: Type<T>, data: any = {}): Observable<U> {
    return new Observable((subscriber) => {
      this.modals.push({ component, data, created: (ref: ComponentRef<T>) => ref.instance.onClose.subscribe(subscriber) });
    })
  }

  closeModal() {
    this.modals.pop();
  }
}
