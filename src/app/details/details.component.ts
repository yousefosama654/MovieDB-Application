import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// How To Get Data From The URL  the activated route
import { TrendingService } from '../trending.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentid: number = 0;
  mediaType: string = '';
  movie: any = null;
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _TrendingService: TrendingService,
    private _spinner: NgxSpinnerService
  ) {
    this.currentid = this._ActivatedRoute.snapshot.params.id;
    this.mediaType = this._ActivatedRoute.snapshot.params.mediatype;
  }
  getTrendingDetails() {
    this._TrendingService
      .getdetails(this.mediaType, this.currentid)
      .subscribe((response) => {
        this.movie = response;
        setTimeout(() => {
          this._spinner.hide();
        }, 500);
      });
  }
  ngOnInit(): void {
    this._spinner.show();
    this.getTrendingDetails();
  }
}
