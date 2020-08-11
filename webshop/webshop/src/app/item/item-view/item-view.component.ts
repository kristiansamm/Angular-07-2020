import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { CartService } from '../../cart/cart.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  item: Item;

  constructor(
    private itemService: ItemService, 
    private route: ActivatedRoute,
    private cartService: CartService,
    private _toastService: ToastService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      let id = params['id'];
    this.item = this.itemService.getItem(id);
  });
  }

  onAddToCart() {
    console.log("addisin");
    this.cartService.addItem(this.item);
    this._toastService.success('Item added to cart!');
  }
}