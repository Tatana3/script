import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {
  
  transform(arr: any[], filterName: string) {
    if (( filterName != "" || filterName != null)) {
      return arr.filter(worker => (worker.name + " " + worker.surname).toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
    };
  }
}
