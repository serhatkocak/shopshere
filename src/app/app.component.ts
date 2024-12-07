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
  constructor() {
  }
}
