import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from './product';

@Component({
    moduleId: module.id,
    templateUrl: 'product.list.component.html',
    providers: [ProductsService]
})

export class ProductListComponent implements OnInit {
    products: Product[];
    constructor(private _getProducts: ProductsService) {}
    ngOnInit () {
        this.getProducts();
    }
    getProducts() {
        this._getProducts.getProducts().then(products => this.products = products);
    }
    moveTo(id: number){
        console.log(id);
    };
}