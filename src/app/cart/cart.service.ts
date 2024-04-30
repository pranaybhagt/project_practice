import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartArr:any=[];
  cartCount:BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }

  addToCart(productObj:any){
    if(productObj){
      var items = this.getCartItemsFromLocalStorage();
      if(items != null){
        this.cartArr = items;
      }
      this.cartArr.push(productObj);
      var cartDetIsStr = JSON.stringify(this.cartArr);
      localStorage.setItem("cart",cartDetIsStr)
    }
    this.cartCount.next(this.cartArr.length);
  }
  getCartItemsFromLocalStorage(){
    var cartItems : any;
    cartItems = localStorage.getItem("cart");
    if(cartItems != null){
      cartItems = JSON.parse(cartItems);
    }
    return cartItems;
  }
}
