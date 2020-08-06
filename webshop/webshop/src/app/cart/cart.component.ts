import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Item } from '../item/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart: Item[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.getItems();
    console.log(this.itemsInCart);
  }

  onRemoveFromCart(i: number) {
    // this.itemsInCart.splice(i, 1);
    this.cartService.removeItem(i);
    this.itemsInCart = this.cartService.getItems();
  }

  onEmptyCart() {
    this.cartService.removeItems();
    this.itemsInCart = this.cartService.getItems();
  }

}
