import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/item/item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cartItemsCount = 0;
  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cartService.cartChanged.subscribe((cartItems: Item[])=>{
      this.cartItemsCount = cartItems.length;
    })
  }
}