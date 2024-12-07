import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsModalComponent } from '../../modals/notifications-modal/notifications-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public navList = [
    'Ana Sayfa',
    'İletişim',
    'Çok Satanlar',
    'Elektronik',
    'Giyim',
    'Kozmatik',
    'Takı/Bijuteri'
  ]

  public activeNavName = 'Ana Sayfa'

  constructor(private modalService: NgbModal, private router: Router) {
  }

  openModal() {
    this.modalService.open(NotificationsModalComponent)
  }

  public changeNav(navName: string) {
    let url: string
    switch (navName) {
      case 'Ana Sayfa':
        url = 'home'
        break;
      case 'cart-page':
        url = 'cart-page'
        break;
      default:
        url = 'home'
        break;
    }
    this.activeNavName = navName
    this.router.navigateByUrl(url)
  }

  register() {
    this.router.navigate(['/register'])
  }
}
