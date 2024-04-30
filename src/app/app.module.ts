import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import {HttpClientModule} from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { ProductDisplayOtherPageComponent } from './components/product-display-other-page/product-display-other-page.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineComponent,
    TopDealsComponent,
    ProductsByCategoryComponent,
    ProductDisplayOtherPageComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
