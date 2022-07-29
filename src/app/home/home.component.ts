import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieslist: Array<any> = [];
  tvlist: Array<any> = [];
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500/';
  seemore_clicked = false;
  test=true;
  seecontent: string = 'see more';
  testy()
  {
    this.test=!this.test;
  }
  seemore(item:number,type:String) {
    if(type=='series')
    {
      for(let  x of this.tvlist)
      {
        if(x.id==item)
        {
          let total=x.overview;
          if (this.seemore_clicked) {
            this.seemore_clicked = false;
            x.overview=total.split(' ').slice(0,10).join(' ');
            // this.seecontent="see less";
          } else {
            this.seemore_clicked = true;
            // this.seecontent="see more";
            x.overview=total;
          }
        }
      }
    }
    else
    {
      for(let  x of this.tvlist)
      {
        if(x==item)
        {
          x.overview=x.overview.split(' ').slice(0,10).join(' ');
        }
      }
    }
  }
  constructor(
    private _Trend: TrendingService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._spinner.show();
    this.getmovies();
    this.gettv();
  }
  getmovies() {
    this._Trend.getTrending('movie').subscribe((response) => {
      this.movieslist = response.results.slice(0, 10);
      // slice return a shallow copy of the array it takes start and end an the end is not included
    });
  }
  gettv() {
    this._Trend.getTrending('tv').subscribe((response) => {
      this.tvlist = response.results.slice(0, 10);
      setTimeout(() => {
        this._spinner.hide();
      }, 200);
    });
  }
}
