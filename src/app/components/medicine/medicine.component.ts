import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PincodeService } from 'src/app/core/services/pincode.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent {

  cities: string[] | undefined;
  pincode: string = ""; 
  
  pin!:string;
  city!:string;

constructor(private pinservice:PincodeService,private route:Router
){}

getcity() {   
  let strpin:string="";
  strpin=strpin +this.pin;
     console.log("getcity called"+strpin.length);
 
     if (strpin.length > 5) {
       this.pinservice.getCityByPin(this.pin)
         .subscribe({
           next: (resp) => {
             this.city = resp[0].cityname;
             console.log(resp);
             console.log(this.city);
           }
         });
        }
      }
}
