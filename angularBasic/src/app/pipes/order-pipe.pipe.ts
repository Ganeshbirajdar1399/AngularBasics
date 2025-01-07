import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderPipe'
})
export class OrderPipePipe implements PipeTransform {

  transform(arr: any[], field: string, isAsc: boolean): any[] {
    if (!arr || !field) {
      return arr;
    }
    {
      const orderedData = arr.sort((a, b) => {
        if (typeof a[field] === 'string' && typeof b[field] === 'string') {
          // Compare strings alphabetically
          return isAsc
            ? a[field].localeCompare(b[field])
            : b[field].localeCompare(a[field]);
        }{
          //ternary operator a==b ? true : false;
        return isAsc ? a[field] - b[field] : b[field] - a[field];
        }

        
      });
      return orderedData;
    }
  }

}
