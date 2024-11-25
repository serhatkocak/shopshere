import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },        
  { path: 'register', component: RegisterComponent },   
  { path: 'home', component: HomeComponent } ,
  { path: 'cart-page', component: CartPageComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
