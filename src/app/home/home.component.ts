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
  seemore(item: number, event: any) {
    if (
      document.getElementById(`${item}`)?.classList.contains('text-truncate')
    ) {
      (document.getElementById(`${item}`) as HTMLElement).classList.remove(
        'text-truncate'
      );
      event.target.innerText = 'see less';
    } else {
      (document.getElementById(`${item}`) as HTMLElement).classList.add(
        'text-truncate'
      );
      event.target.innerText = 'see more';
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
