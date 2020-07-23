import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: {brand: string, model: string, year: string, manufactured: string, picture: string}[] = [];
  titleText = 'Autode nimistu!';


  onSubmitForm(form: NgForm) {
    console.log(form);
    // console.log(form.value); vormi kõik väärtused
    // console.log(form.value.breed); konkreetne väärtus vormist

  let car = form.value;
  this.cars.push(car);
 }

 onDeleteCars(i) {
  console.log("töötab");
 this.cars.splice(i,1);

  }
}
