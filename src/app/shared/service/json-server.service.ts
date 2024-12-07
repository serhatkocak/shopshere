import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "../models/product.model";
import { ISlider } from "../models/slider.model";

@Injectable({
    providedIn: "root"
})

export class JsonServerService {

    private apiUrl = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }

    public getProductList(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}product-list`)
    }

    public getCartList(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}cart`)
    }

    public getSlideList(): Observable<ISlider[]> {
        return this.http.get<ISlider[]>(`${this.apiUrl}slider-list`)
    }

    public addToCart(product: IProduct) {
        return this.http.post(`${this.apiUrl}cart`, product)
    }

    public removeFromCart(productId: string | undefined) {
        return this.http.delete(`${this.apiUrl}cart/${productId}`)
    }
}