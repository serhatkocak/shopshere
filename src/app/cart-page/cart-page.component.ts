import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../shared/models/product.model";

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
    private apiUrl = 'http://localhost:3000/';

    cartList: IProduct[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getProductList()
    }

    private getProductList() {
        this.http.get<IProduct[]>(`${this.apiUrl}cart`).subscribe((cartList: IProduct[]) => {
            this.cartList = cartList;
        })
    }

    removeFromCart(product: IProduct) {
        this.http.delete(`${this.apiUrl}cart/${product.id}`).subscribe(_ => {
            console.log('silindi')
            this.getProductList()
        })
    }
}
