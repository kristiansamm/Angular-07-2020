import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/item/item.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cartItemsCount = 0;
  constructor(private cartService: CartService, private translate: TranslateService) {
    translate.addLangs(['en', 'ee'])
    translate.setDefaultLang('ee');
    translate.use('en');
   }


  ngOnInit(): void {
    this.cartService.cartChanged.subscribe((cartItems: Item[])=>{
      this.cartItemsCount = cartItems.length;
    })
    
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
}