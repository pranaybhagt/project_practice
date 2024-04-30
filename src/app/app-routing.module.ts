import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { ProductsByCategoryComponent } from './components/products-by-category/products-by-category.component';
import { ProductDisplayOtherPageComponent } from './components/product-display-other-page/product-display-other-page.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'otcCategory',component:ProductsByCategoryComponent},
  {path:'productDisplay',component:ProductDisplayOtherPageComponent},
  {path:'cart',component:CartComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
