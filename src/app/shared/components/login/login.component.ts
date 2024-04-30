import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!:FormGroup;
  isNewUser:boolean = false;

  @Output()
  emitAction:EventEmitter<boolean> = new EventEmitter();
  constructor(private fb:FormBuilder, private http:HttpService){}

  ngOnInit(){
    this.initializeForm();

  }
  initializeForm(){
    this.loginForm = this.fb.group({
      'email':[''],
      'password':['']
    })
  }
  login(){
    console.log(this.loginForm.value);

    const httpParams: HttpParams = new HttpParams().set('email',this.loginForm.get('email')?.value)
                                                  .set('password',this.loginForm.get('password')?.value);
    
  this.http.getDataFromServer('users',httpParams).subscribe({
    next:(response:any)=>{
      if(response && response.length > 0){
        this.isNewUser =false;
        const userObj = response[0];
        const token = "Bgfdjskadjfhfjfkd"
        localStorage.setItem("userDetails",JSON.stringify(userObj));
        localStorage.setItem("token",token);
        this.emitAction.emit(true);
      }else{
        this.isNewUser = true

      }
    },
    error:(error:any)=>{

    }
  })
  }

}
