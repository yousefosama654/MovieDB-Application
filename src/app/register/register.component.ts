import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; //interfaces for forms
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // reactive forms ,template driven forms
  // reactive forms : ts,validaation (most important and complex)
  //template driven forms:search in html
  //input -->>form control
  //inputs -->>form groups
  errormessage: string = '';
  isloading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  registerform: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.max(50),
      Validators.min(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      // Validators.pattern(/^[a-z][0-9]{3}$/),
      Validators.required,
    ]),
  });
  // submitform() {
  //   if (this.registerform.valid) {
  //     this.isloading = true;
  //     this._AuthService.signup(this.registerform.value).subscribe(
  //       (response) => {
  //         if ((response.message = 'success')) {
  //           this.isloading = false;
  //           //navigate to login and reset the form
  //           this._Router.navigate(['/login']); //programmable routing
  //           this.registerform.reset(); //this how to reset the form in angular
  //         } else {
  //           this.isloading = false;
  //           this.errormessage = response.message;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   } else return;
  // }
  submitform() {
    this.isloading = true;
    this._AuthService.signup(this.registerform.value).subscribe((response) => {
      if (response.message == 'success') {
        this._Router.navigate(['/login']);
        this.isloading = false;
      } else {
        this.errormessage = response.message;
        this.isloading = false;
      }
    });
  }
  get age() {
    return this.registerform.get('age');
  }
  get email() {
    return this.registerform.get('email');
  }
  get first_name() {
    return this.registerform.get('first_name');
  }
  get password() {
    return this.registerform.get('password');
  }
  get last_name() {
    return this.registerform.get('password');
  }
  gotologin() {
    this._Router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
