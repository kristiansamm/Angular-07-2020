import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';
import { ToastService } from 'angular-toastify';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  constructor(private itemService: ItemService, 
    private router: Router, 
    private toastService: ToastService, 
    private translate: TranslateService) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    // let newItem = form.value;
    // newItem.price = "$"+newItem.price
    // this.itemService.addItem(newItem);
    
    let newItem = new Item(
      form.value.imgSrc,
      form.value.title,
      form.value.price,
      form.value.category,
      true
    )

    console.log(form);

    this.itemService.addNewItem(newItem);

    this.toastService.success(this.translate.instant('Item added!'));

setTimeout(()=>{ 
  this.router.navigateByUrl("/");
    }, 1500)
  }
}