import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent {
  topDealsByCategory:any;
  constructor(private http:HttpService, private cart:CartService){}

  ngOnInit(): void {
   this.getProductDeatailsByCategory();
  }

   getProductDeatailsByCategory() {
    this.http.getDataFromServer('top-deals-by-category').subscribe({
      next:(response:any)=>{
        if(response && response.length > 0){
          this.topDealsByCategory = response;

        }

      },
      error:(error:any)=>{

      }
    })
  }
  addToCart(productObj:any){
    this.cart.addToCart(productObj);

  }
  
  
}



