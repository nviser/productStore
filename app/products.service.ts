import {Injectable} from '@angular/core';

import {PRODUCTS} from './mock-products';
import {Product} from './product';

@Injectable()
export class ProductsService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
}