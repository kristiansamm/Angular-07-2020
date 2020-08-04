import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.itemService.addItem(form.value);
  }
}
