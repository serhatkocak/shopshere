import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsModalComponent } from './shared/modals/notifications-modal/notifications-modal.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NotificationsModalComponent,
    SliderComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    NgbModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
