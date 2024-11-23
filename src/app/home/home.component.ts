import { NotificationsModalComponent } from './../shared/modals/notifications-modal/notifications-modal.component';

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

 
modal: any;
  
  constructor(private modalService: NgbModal){}

  openModal() {
    this.modalService.open(NotificationsModalComponent)
  }
 
}
