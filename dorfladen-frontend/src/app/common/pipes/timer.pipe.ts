import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer',
})
export class TimerPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    value = Math.floor(value / 1_000);
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
