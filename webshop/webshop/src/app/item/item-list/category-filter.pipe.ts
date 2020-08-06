import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: Item[], category: string): Item[] {
    if (category == null) {
      return items;
    }
    return items.filter(item => item.category.indexOf(category) !== -1 );
  }

}
