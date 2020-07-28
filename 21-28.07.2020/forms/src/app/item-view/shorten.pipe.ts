import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length > limit) {
      value = value.substring(0,limit) + "...";
    }
     return value;
  }

}
