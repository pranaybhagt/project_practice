import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  baseurl:string = "http://localhost:3000/";
  headers:HttpHeaders = new HttpHeaders({
     'content-type':'application/json'
  })

  getDataFromServer(endPoint:string){
    const url =this.baseurl + endPoint;
   return this.http.get(url,{headers:this.headers})
  }
}
