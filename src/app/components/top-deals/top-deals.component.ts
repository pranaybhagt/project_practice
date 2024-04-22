import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent {

  topDeals:any=[];
  constructor(private http:HttpService){

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

}
