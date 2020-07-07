import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(arr:any[], firstNameParam:string, lastNameParam:string, ) {
    if ( !isNullOrUndefined(firstNameParam) && firstNameParam !== ''){
      let filter = arr.filter(
      ell => ell.type.toLowerCase().indexOf(firstNameParam.toLowerCase()) === 0);// каждый эл массива и проверяет
      return filter;
      }
      
      if ( !isNullOrUndefined(lastNameParam) && lastNameParam !== ''){
      let filter = arr.filter(
      ell => ell.kolich.indexOf(String(lastNameParam)) === 0);
      return filter;
      }
  }
  

}
