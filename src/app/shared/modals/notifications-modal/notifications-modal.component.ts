import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notifications-modal',
  templateUrl: './notifications-modal.component.html',
  styleUrls: ['./notifications-modal.component.scss']
})
export class NotificationsModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

  notifications: string[] = [
    'Yeni ürün eklendi!',
    'Sepetinize bir indirim kodu yüklendi.',
    'Son siparişiniz kargoya verildi.',
    'Bugün bir fırsat daha yakaladınız!'
  ]
}
