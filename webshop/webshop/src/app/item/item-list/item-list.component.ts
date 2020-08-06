import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items: Item[]; 
selectedCategory: string;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
   this.items = this.itemService.getItems();
  }

}
