import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousands'
})
export class ThousandsPipe implements PipeTransform {

  transform(input: any, args?: any): any {

    if (input < 10000000) {
      const suffixes = ['', 'k', 'M'];
      const suffixNum = Math.floor(('' + input).length / 3);

      const shortValue = parseFloat((suffixNum !== 0 ?
        (input / Math.pow(1000, suffixNum)) : input).toPrecision(2));

      // if (shortValue % 1 !== 0) {
      //   const shortNum = shortValue.toFixed(1);
      // }

      return shortValue + suffixes[suffixNum];
    } else {
      return (input / 1000000) + 'M';
    }
    // let exp, rounded,
    //   suffixes = ['k', 'M', 'G'];

    // if (Number.isNaN(input)) {
    //   return null;
    // }

    // if (input < 1000) {
    //   return input.toFixed(0);
    // }

    // exp = Math.floor(Math.log(input) / Math.log(1000));

    // return (input / Math.pow(1000, 1)).toFixed(0) + suffixes[exp - 1];


  }

}





