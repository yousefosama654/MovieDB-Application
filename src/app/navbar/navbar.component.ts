import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  term:string="";
  islogin: boolean = false;
  alertlogin:boolean=false;
  fixed:boolean=false;
  @HostListener('window:scroll', ['$event'])
  navbar_fixing()
  {
    if(window.scrollY>document.getElementById("nav")!.scrollTop)
    this.fixed=true;
    else
    this.fixed=false;
  }
  another_click():void
  {
  if((document.getElementById("navbar-toggler") as HTMLElement).ariaExpanded=="true")
   (document.getElementById("navbar-toggler") as HTMLElement).click();
  }
  ngOnInit(): void {
    this.foo();
  }
  foo() {
    this._AuthService.userdata.subscribe(() => {
      if (this._AuthService.userdata.getValue() != null) {
        this.islogin = true;
      } else this.islogin = false;
    });
  }
  logout() {
    this._AuthService.signout();
  }
  gotohome() {
    if (this.islogin == true) {
      this._Router.navigate(['/home']);
    } else 
    this.alertlogin=true;
  }
}
