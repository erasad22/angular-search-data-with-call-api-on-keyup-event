import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderBy",
  pure: false
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: Array<any>): Array<string> {
    if(array){
      array.sort((a: any, b: any) => {
        if (Number(a.population) < Number(b.population)) {
          return 1;
        } else if (Number(a.population) > Number(b.population)) {
          return -1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}