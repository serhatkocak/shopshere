import { JsonServerService } from './../shared/service/json-server.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from "../shared/models/product.model";
import { ISlider } from '../shared/models/slider.model';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public sliderList: ISlider[] = []
    public productList: IProduct[] = []

    constructor(private jsonServerService: JsonServerService, private toastrService: ToastrService) {
    }

    ngOnInit() {
        this.jsonServerService.getProductList().subscribe((sliderList: ISlider[]) => {
            this.sliderList = sliderList;
        })
    }

    addToCart(product: IProduct) {
        this.jsonServerService.addToCart(product).subscribe(_ => {
            this.toastrService.success('Ekleme Bşarılı', 'Ürününüz Sepete Eklendi!')
        })
    }
}
