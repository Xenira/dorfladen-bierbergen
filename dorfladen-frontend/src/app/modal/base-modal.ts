import { Subject } from 'rxjs';
import { ModalService } from './modal.service';

export class BaseModal<T> {
  public readonly onClose = new Subject<T | undefined>();

  constructor(private modalService: ModalService) {}

  public close(data?: T | undefined) {
    this.modalService.closeModal();
    this.onClose.next(data);
    this.onClose.complete();
  }
}
