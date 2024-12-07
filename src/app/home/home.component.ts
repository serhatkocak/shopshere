import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IProduct } from "../shared/models/product.model";
import { ISlider } from '../shared/models/slider.model';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private apiUrl = 'http://localhost:3000/';


    sliderList: ISlider[] =[]

    productList: IProduct[] = []

    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<IProduct[]>(`${this.apiUrl}product-list`).subscribe((productList: IProduct[]) => {
            this.productList = productList;
        })

        this.http.get<ISlider[]>(`${this.apiUrl}slider-image`).subscribe((sliderList: ISlider[]) =>{
            this.sliderList = sliderList;
        })
    }

    addToCart(product: IProduct) {
        this.http.post(`${this.apiUrl}cart`, product).subscribe();
    }
}
