import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardsfilter'
})
export class CardsfilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSearch = [];
    for(const cards of value){
      if (cards.rubro.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultSearch.push(cards);
      };
    };
    return resultSearch;
  }

}
