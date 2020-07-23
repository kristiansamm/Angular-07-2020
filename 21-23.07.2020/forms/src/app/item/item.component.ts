import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  cats: any;

  constructor() { }

  ngOnInit(): void {
  }
  catsArray: {breed: string, name: string, picture: string}[] = [];
  titleText = 'Forms angular';
  number: number;
  randomNumbers = [];



  onSubmitForm(form: NgForm) {
    console.log(form);
    // console.log(form.value); vormi kõik väärtused
    // console.log(form.value.breed); konkreetne väärtus vormist

  let cat = form.value;
  this.cats.push(cat);

 }

  onGenerate() {
    this.number = Math.ceil(Math.random() * (99 - 10) + 10);
    console.log(this.number);

    this.randomNumbers.push(this.number);
  }


  onDelete(i) {
    console.log("töötab");
    this.randomNumbers.splice(i,1);
 }


  onDeleteCats(i) {
    console.log("töötab");
   this.cats.splice(i,1);
 }
}
