import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
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

  getDataFromServer(endPoint:string,params:HttpParams = new HttpParams()){
    const url =this.baseurl + endPoint;
   return this.http.get(url,{headers:this.headers,params:params})
  }

  postDataToServer(endPoint:string,data:any){
    const url =this.baseurl + endPoint;
   return this.http.post(url,{headers:this.headers,data})
  }
}
