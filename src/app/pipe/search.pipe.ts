import { Pipe, PipeTransform } from '@angular/core';
import { User } from './../models/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any) {
      if (searchTerm) {
          searchTerm = searchTerm.replace(/^\s+|\s+$/g,'');
          return value.filter((user: User) =>
              (user.name.toLowerCase().indexOf(searchTerm.toString().toLowerCase()) > -1)
          );
      }
      else {
          return value;
      }
  }
}