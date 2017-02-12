import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ProductDetailsComponent} from './product.details.component';
import {ProductDetailsComponent2} from './product.details.component2';
import {PageNotFoundComponent} from './page.not.found.component';
import {ProductListComponent} from './product.list.component';



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