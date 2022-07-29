import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(movielist: any[], term: string,type:string): any[] {
    if(type=='tv')
    return movielist.filter((movie) => 
      movie.name.toLowerCase().includes(term.toLowerCase())
    );
    else
    return movielist.filter((movie) => 
    movie.title.toLowerCase().includes(term.toLowerCase())
  );
  }
}
//the pipe is a function implements in the html code(powerful of angular )
//the logic of the code is in the transform function
