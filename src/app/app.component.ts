import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsModalComponent } from './shared/modals/notifications-modal/notifications-modal.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  constructor(private modalService: NgbModal) {

  }

  openModal() {
    this.modalService.open(NotificationsModalComponent)
  }

  public changeNav(navName: string) {
    this.activeNavName = navName
    console.log(this.activeNavName)
  }
}
