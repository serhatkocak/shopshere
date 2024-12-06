import { RegisterComponent } from './auth/register/register.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsModalComponent } from './shared/modals/notifications-modal/notifications-modal.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private modalService: NgbModal, private router: Router) {

  }

  openModal() {
    this.modalService.open(NotificationsModalComponent)
  }

  public changeNav(navName: string) {
    this.activeNavName = navName
    console.log(this.activeNavName)
  }

  inAuth() {
    return this.router.url !== '/login' && this.router.url !== '/register'
  }

  cart(){
    this.router.navigate(['/cart-page'])
  }

  register(){
    this.router.navigate(['/register'])
  }
}
