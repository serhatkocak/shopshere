import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private apiUrl = 'http://localhost:3000/data';

  constructor(private router:Router, private http:HttpClient){
    http.get(this.apiUrl).subscribe(sliderContent => {
      this.sliderContent = sliderContent
      console.log(sliderContent)
    })
  }


  sliderContent:any = [

  ]

  productList = [
    {
      productImage: 'vileda-adem.png',
      productTitle: 'viledaAdem',
      productContent: '51.99tl ye düşmüştür bla bla bla'
    },
    {
      productImage: 'vileda-adem.png',
      productTitle: 'viledaAdem',
      productContent: '51.99tl ye düşmüştür bla bla bla'
    },
    {
      productImage: 'icardi-pose.jpeg',
      productTitle: 'icardi',
      productContent: '51.99tl ye düşmüştür bla bla bla'
    },
    {
      productImage: 'icardi-pose.jpeg',
      productTitle: 'icardi',
      productContent: '51.99tl ye düşmüştür bla bla bla'
    },
    {
      productImage: 'icardi-pose.jpeg',
      productTitle: 'icardi',
      productContent: '51.99tl ye düşmüştür bla bla bla'
    },
    {
      productImage: 'icardi-pose.jpeg',
      productTitle: 'icardi',
      productContent: '51.99tl ye düşmüştür bla bla bla'
    },
  ]

  addToCart(product:any){
    console.log(product)
  }
}
