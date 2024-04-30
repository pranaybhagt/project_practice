import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  hideLoginBtn:boolean = false;
  action:string="Login";
  userDetailsObj:any;
  count:number=0;

  @ViewChild('closeBtn')closeBtn!:ElementRef

  constructor(private auth:AuthenticationService,private cartSv:CartService){}

  ngOnInit(){
    this.cartSv.cartCount.subscribe((response:any)=>{
      if(response){
        this.count = response;
      }
    })

    this.getCartItems();
  }
  
  getCartItems(){
    var cartItems = this.cartSv.getCartItemsFromLocalStorage();
    if(cartItems != null){
      this.count = cartItems.length;
    }

  }


  triggerAction(actionName:any){
    this.action = actionName
  }
 
  getData(isLoginSuccess:boolean){
    if(isLoginSuccess){
      this.hideLoginBtn = true;
      this.userDetailsObj = this.auth.getUser();
      this.closeBtn.nativeElement.click();

    }

  }
  logOut(){
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
    this.hideLoginBtn = false;
  }

}
