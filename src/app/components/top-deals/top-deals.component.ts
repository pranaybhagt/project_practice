import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/cart/cart.service';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent {

  topDeals:any=[];
  constructor(private http:HttpService, private cart:CartService){

  }
  ngOnInit(){
    this.getTopDeals();
  }

  getTopDeals(){
    const endPoint = 'top-deals';
    this.http.getDataFromServer(endPoint).subscribe({
      next:(response:any)=>{
        if(response && response.length > 0){
          this.topDeals = response;
          console.log("top-deals",this.topDeals);
        }
      },
      error:(error)=>{
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  addToCart(productObj:any){
    this.cart.addToCart(productObj);

  }

}
