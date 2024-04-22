import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipincode } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {
  baseurl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getCityByPin(pin: string) {  
    const url = `${this.baseurl}cities?pincode=${pin}`;
    return this.http.get<Ipincode[]>(url);   
    
  }
}
