import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSearch = [];
    for(const banco of value){
      if (banco.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultSearch.push(banco);
      };
    };
    return resultSearch;
  }
  
}
