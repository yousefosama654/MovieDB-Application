import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css'],
})
export class TvshowsComponent implements OnInit {
  tvlist: any[] = [];
  term: string = '';
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500/';
  // pages: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  page:number=1;
  totallength:number=200;
  constructor(private _TrendingService: TrendingService,private _spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this._spinner.show();
    this.getpage(this.page);
  }
  gettrendingmovies(pagenumber: number) {
    this._TrendingService.discover('tv', pagenumber).subscribe((response) => {
      this.tvlist = response.results;
    });
    setTimeout(() => {
      this._spinner.hide();
    }, 200);
  }
  getpage(pagenumber: number) {
    this.gettrendingmovies(pagenumber);
  }
}
