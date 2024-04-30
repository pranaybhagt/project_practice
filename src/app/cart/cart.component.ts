import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartItems:any;
  orderObj:Order = new Order();
  productList:Product[] = [];

  constructor(private cartSv:CartService){}


  ngOnInit(): void {
   this.cartItems =  this.cartSv.getCartItemsFromLocalStorage();
  //  this.

  }


}

export class Order{
  orderId!:string;
  fullName!:string;
  mobileNo!:string;
  emailId!:string;
  totalAmount!:string;
  totalDiscount!:string;
  totalItems!:string;
  finalAmount!:string;
  deliveryType!:string;
  addressDetails: Address = new Address();
  products:Product[]=[]

}
export class Address{
  city!:string;
  pincode!:number;
  state!:string;
  addressLine1!:string;
  addressLine2!:string;

}
export class Product{
  productName!:string;
  price!:string;
  quantity!:number;
  drugCode!:number;
  totalPrice!:number;
  discount!:number;
  description!:string;
  brand!:string;
  type!:string;


}
