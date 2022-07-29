import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // islogin: any = new BehaviorSubject(false);
  userdata: any = new BehaviorSubject(null);
  constructor(private _http: HttpClient,private _Router:Router) {}
  signup(registerdata: any): Observable<any> {
    return this._http.post(
      'https://route-egypt-api.herokuapp.com/signup',
      registerdata
    );
    //form data is the value of the form
  }
  saveuserdata() {
    let encodedtoken = JSON.stringify(localStorage.getItem('usertoken'))
    let decodetoken = jwtDecode(encodedtoken);
    this.userdata.next( decodetoken);
  }
  signout()
  {
    localStorage.removeItem('usertoken')
    this.userdata.next(null);
    this._Router.navigate(['/login']);
  }
  signin(logindata: any): Observable<any> {
    return this._http.post(
      'https://route-egypt-api.herokuapp.com/signin',
      logindata
    );
  }
  // new cocept of observation is the BehaviorSubject which i can observe in any plce because it is in the service
  // next(value:T)
  //getValue();
}
