import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousands'
})
export class ThousandsPipe implements PipeTransform {

  transform(input: any, args?: any): any {
    let exp, rounded,
      suffixes = ['k', 'M', 'G'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      return input.toFixed(0);
    }

    exp = Math.floor(Math.log(input) / Math.log(1000));

    return (input / Math.pow(1000, 1)).toFixed(0) + suffixes[exp - 1];


  }

}





