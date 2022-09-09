import { Component, HostListener } from '@angular/core';
import { window } from 'rxjs';

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
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    //the document elemt is the whole window
    let calcheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollvalue = Math.round((pos * 100) / calcheight);
    if (pos > 100) {
      if(scrollProgress?.style!= undefined)
      scrollProgress.style.display = "grid";
     }
    else {
      if(scrollProgress?.style!= undefined)
      scrollProgress.style.display = "none";
    }
    if(scrollProgress?.style!= undefined)
      scrollProgress.style.background = `
    conic-gradient(rgba(36, 186, 239, 0.6) ${scrollvalue}%,#d7d7d7 ${scrollvalue}%)
      `;
    
  }
  GoToTop() {
    document.documentElement.scrollTo(0, 0);
    //the document elemt is the whole window
  }
  title = 'app';
}
