import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  page:number=1;
  term:string='';
  totallength:number=200;
  peoplelist:any[]=[];
  baseImgUrl: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _TrendingService:TrendingService,private _Router:Router,private _spinner: NgxSpinnerService) {
   }
  ngOnInit(): void {
    this._spinner.show();
    this.getpeople(this.page);
  }
  getpeople(pagenumber:number)
  {
  this._TrendingService.getPeople(this.page).subscribe((response)=>{
    this.peoplelist=response.results;
    setTimeout(() => {
      this._spinner.hide();
    }, 200);
  })
}
}
