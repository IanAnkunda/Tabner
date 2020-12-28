import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], searchedKeyword: string, filterMetadata: any): any[] {

    if(!users) return [];
    if(!searchedKeyword) {
      filterMetadata.count = users.length;
      return users;
    }
    searchedKeyword = searchedKeyword.toLowerCase();

    let filteredItems = users.filter( it => {
      return it.name.toLowerCase().includes(searchedKeyword);
    });
    filterMetadata.count = filteredItems.length;
    return filteredItems;

    }

}
