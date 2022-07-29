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
  pages: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ngOnInit(): void {
    this._spinner.show();
    this.getpage(1);
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
