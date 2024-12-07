import { JsonServerService } from './../shared/service/json-server.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from "../shared/models/product.model";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{
    public cartList: IProduct[] = [];

    constructor(private JsonServerService: JsonServerService, private toastr: ToastrService) {}

    ngOnInit() {
        this.getProductList()
    }

    private getProductList() {
        this.JsonServerService.getCartList().subscribe((cartList: IProduct[]) => {
            this.cartList = cartList;
        })
    }

    removeFromCart(productId: string | undefined) {
        this.JsonServerService.removeFromCart(productId).subscribe(_ => {
            this.toastr.error('Ürün Silindi');
            this.getProductList()
        })
    }
}
