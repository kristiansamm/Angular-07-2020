import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-all',
  templateUrl: './item-all.component.html',
  styleUrls: ['./item-all.component.css']
})
export class ItemAllComponent implements OnInit {
  items: Item[]; 
  selectedCategory: string;
  
    constructor(private itemService: ItemService) { }
  
    ngOnInit(): void {
     this.items = this.itemService.getItems();
    }

    onInactive(i) {
      console.log(this.items[i]["visible"]);
      // this.items[i]["visible"] = !this.items[i]["visible"]
      // // this.items [i].visible
      this.itemService.changeVisibleState(i);
      this.items = this.itemService.getItems();

    }
}
