import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(overview:string): string {
    return overview.split(' ').slice(0,10).join(" ");
  }

}
// split function split the string and convert it to array
// string-->>array (split function)
// array-->>string (join function)