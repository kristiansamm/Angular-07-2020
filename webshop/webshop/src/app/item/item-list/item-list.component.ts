import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items: Item[] = [];
selectedCategory: string;
itemsShown: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  this.itemService.fetchItems().subscribe(response => 
    {
    this.items = response;
    this.onShowAll();
  });
  }
  
   onShowAll() {
     this.itemsShown = this.items;
   }

   onSortPriceAsc() {
    this.itemsShown = this.items.slice().sort(
      // (item, itemNext) => item.price - itemNext.price
    );
   }

   onSortPriceDesc() {  
     this.itemsShown = this.items.slice().sort(
      // (item, itemNext) => item.price - itemNext.price
  );
}

   onSortTitleAsc() {
    this.itemsShown = this.items.slice().sort(
      (item, itemNext) => item.title.localeCompare(itemNext.title)
     );
   }

   onSortDesc() {
    this.itemsShown = this.items.slice().sort(
      (item, itemNext) => itemNext.title.localeCompare(item.title)
     );
   }
  }
