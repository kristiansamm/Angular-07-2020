import { Injectable } from '@angular/core';
import { Item } from '../item/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart:  Item[] = [];
  cartChanged = new Subject<Item[]>();

  constructor() { }

  addItem(item: Item): void {
    this.itemsInCart.push(item);
    this.cartChanged.next(this.itemsInCart.slice());
  }

  getItems(): Item[] {
    return this.itemsInCart.slice();
  }

  removeItem(i: number): void {
    this.itemsInCart.splice(i, 1);
    this.cartChanged.next(this.itemsInCart.slice());
  }

removeItems(): void {
  this.itemsInCart.splice(0, this.itemsInCart.length);
  this.cartChanged.next(this.itemsInCart.slice());
  }
}