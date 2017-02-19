import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ProductDetailsComponent} from './products/product.details.component';
import {ProductDetailsComponent2} from './products/product.details.component2';
import {PageNotFoundComponent} from './page.not.found.component';
import {ProductListComponent} from './products/product.list.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [
        AppComponent, 
        ProductDetailsComponent, 
        ProductDetailsComponent2, 
        PageNotFoundComponent, 
        ProductListComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}