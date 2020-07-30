import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
items: {imgSrc: string, title: string, price: string, category: string}[]

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
   this.items = this.itemService.getItems();
  }

}
