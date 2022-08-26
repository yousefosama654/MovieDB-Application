import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private _TrendingService: TrendingService,private _spinner: NgxSpinnerService) {}
  movielist: Array<any> = [];
  term: string = '';
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500/';
  page:number=1;
  totallength:number=200;
  ngOnInit(): void {
    this._spinner.show();
    this.getpage(this.page);
  }
  gettrendingmovies(pagenumber: number) {
    this._TrendingService
      .discover('movie', pagenumber)
      .subscribe((response) => {
        this.movielist = response.results;     
      });
      setTimeout(() => {
        this._spinner.hide();
      }, 200);
  }
  getpage(pagenumber: number) {
    this.gettrendingmovies(pagenumber);
  }
}
