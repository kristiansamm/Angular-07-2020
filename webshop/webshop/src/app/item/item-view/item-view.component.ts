import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  item: {imgSrc: string, title: string, price: string, category: string}

  constructor(
    private itemService: ItemService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      let id = params['id'];
    this.item = this.itemService.getItem(id);
  })
  console.log(this.item);
  }

}
