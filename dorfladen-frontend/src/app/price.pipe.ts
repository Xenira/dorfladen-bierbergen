import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value?: number | string, ...args: unknown[]): unknown {
    if (!value) {
      return '-,--€'
    }
    value = value.toString();
    const isNegative = value.startsWith('-');
    value = value.replace('-', '');
    value = value.length < 2 ? '0' + value : value;
    const cent = value.substring(value.length - 2);
    const eur = value.length > 2 ? value.substring(0, value.length - 2) : '0';
    return `${isNegative ? '-' : ''}${eur},${cent}€`;
  }

}
