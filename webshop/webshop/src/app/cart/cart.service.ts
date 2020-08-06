import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart:  Item[] = [];

  constructor() { }

  addItem(item: Item): void {
    console.log(this.itemsInCart);
    this.itemsInCart.push(item);
    console.log(this.itemsInCart);
  }

  getItems(): Item[] {
    return this.itemsInCart.slice();
  }

  removeItem(i: number): void {
    this.itemsInCart.splice(i, 1);
  }

removeItems(): void {
  this.itemsInCart.splice(0, this.itemsInCart.length);
  }
}