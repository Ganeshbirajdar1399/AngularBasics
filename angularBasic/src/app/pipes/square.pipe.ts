import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if (!value) {
      return value;
    }
    return value * value;
  }

}
