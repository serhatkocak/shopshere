
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  notifications: string[] = [
    'Yeni ürün eklendi!',
    'Sepetinize bir indirim kodu yüklendi.',
    'Son siparişiniz kargoya verildi.',
    'Bugün bir fırsat daha yakaladınız!'
  ]
modal: any;
  
  constructor(private modalService: NgbModal){}

  openModal(content: any) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
 
}
