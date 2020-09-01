import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from '../item/item.model';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: Item[] = [];
  sumOfCart: number;

  constructor(private cartService: CartService,
  private _toastService: ToastService) { }

  ngOnInit(): void {
    this.getItemsFromService();
    this.getCartSum();
  }

  getItemsFromService(): void {
    this.itemsInCart = this.cartService.getItems();
    // this.itemsInCart = itemsFromService.map(item => ({...item, price: item.price.split("$")[2] ? item.price.split("$")[2] : item.price.split("$")[1]  }));
  }

  onRemoveFromCart(i: number) {
    // this.itemsInCart.splice(i, 1);
    this.cartService.removeItem(i);
    this.getItemsFromService();
    this.getCartSum();
    this._toastService.warn('Item removed from cart!');
  }

  getCartSum() {
    this.sumOfCart = 0
    this.itemsInCart.forEach(item => {
      this.sumOfCart += (Number)(item.price);
    });
    this.sumOfCart = (Number)(this.sumOfCart.toFixed(2));
  }

  onEmptyCart() {
    this.cartService.removeItems();
    this.itemsInCart = this.cartService.getItems();
  }

}
