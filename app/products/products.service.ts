import {Injectable} from '@angular/core';

export class Product {
  constructor(public id: number, public name: string) { }
}

let PRODUCTS = [
  new Product (1, 'Snickers'),
  new Product (2, 'Trousers'),
  new Product (3, 'Jeans'),
  new Product (4, 'Pyjama'),
  new Product (5, 'Shirt'),
  new Product (6, 'Trainers')
];

// import {PRODUCTS} from './mock-products';
// import {Product} from './product';

let productsPromise = Promise.resolve(PRODUCTS);

@Injectable()
export class ProductsService {
    getProducts() {
        return productsPromise;
    }

    getProduct(id: number | string) {
        return productsPromise.then(products => products.find(product => product.id === +id));
    }

}