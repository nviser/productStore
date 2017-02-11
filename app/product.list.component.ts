import {Component} from '@angular/core';

const products = [
    {name: "Snickers", id: 1},
    {name: "Trousers", id: 2},
    {name: "Jeans", id: 3},
    {name: "Pyjama", id: 4},
    {name: "Shirt", id: 5},
    {name: "Trainers", id: 6}
]

@Component({
    moduleId: module.id,
    //selector: 'prod-det',
    templateUrl: 'product.list.component.html'
})

export class ProductListComponent {
    products = products;
    moveTo(id: number){
        console.log(id);
    };
}