import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  button_disp: boolean = false;
  mood: string = 'exit';
  @HostListener('window:scroll', ['$event'])
  displayButton() {
    if (window.scrollY > 300) {
      if (this.mood == 'exit') {
        this.mood = 'entrance';
        this.button_disp = true;
      }
    } else {
      if (this.mood == 'entrance') {
        setTimeout( ()=> {
          this.mood = 'exit';
          this.button_disp = false;
        } 
        , 250);
      }
    }
  }
  GoToTop() {
    window.scrollTo(0, 0);
  }
  title = 'app';
}
