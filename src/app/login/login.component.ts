import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isloading: boolean = false;
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  errormessage: string = '';
  submitform() {
    this.isloading = true;
    if (this.loginform.valid) {
      this._AuthService.signin(this.loginform.value).subscribe((response) => {
        if (response.message == 'success') {
          localStorage.setItem('usertoken', response.token);
          this._AuthService.saveuserdata();
          this._Router.navigate(['/home']);
          this.isloading = false;
        } else {
          this.errormessage = response.message;
          this.isloading = false;
        }
      });
    }
  }
  get email() {
    return this.loginform.get('email');
  }
  get password() {
    return this.loginform.get('password');
  }
  constructor(private _Router: Router, private _AuthService: AuthService) {}
  ngOnInit(): void {}
}
// Token is the encrypted version of tha user data by the library jwt
