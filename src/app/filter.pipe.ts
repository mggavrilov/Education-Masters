import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: string): any[] {
    if (!items || !term) {
        return items;
    }

    const filtered = items.filter(item =>
        item.name.toLowerCase().includes(term.toLowerCase()));
    return filtered;
  }
}
