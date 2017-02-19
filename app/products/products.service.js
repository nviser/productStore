"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Product = (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    return Product;
}());
exports.Product = Product;
var PRODUCTS = [
    new Product(1, 'Snickers'),
    new Product(2, 'Trousers'),
    new Product(3, 'Jeans'),
    new Product(4, 'Pyjama'),
    new Product(5, 'Shirt'),
    new Product(6, 'Trainers')
];
// import {PRODUCTS} from './mock-products';
// import {Product} from './product';
var productsPromise = Promise.resolve(PRODUCTS);
var ProductsService = (function () {
    function ProductsService() {
    }
    ProductsService.prototype.getProducts = function () {
        return productsPromise;
    };
    ProductsService.prototype.getProduct = function (id) {
        return productsPromise.then(function (products) { return products.find(function (product) { return product.id === +id; }); });
    };
    ProductsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map