import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

// document - käib läbi HTMLi
document.getElementById("hello");

// Paneme eraldi muutujasse. var = variable
var helloHtmlElement = document.getElementById("hello");

//innerHTMLiga muudame HTMLi sisest väärtust
helloHtmlElement.innerHTML = "Tere tulemast";

// Teeme sama asja mis üleval (printisime välja)
var clockHtmlElement = document.getElementById("clock");

// massiiv / list. Elemendid hakkavad 0-st. Täidame ise muutuja andmetega (enne funktsioonide kaudu)
var estonianMonths = ["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
var estonianWeekDays = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev", "Puhapäev"];


updateClock();
setInterval(updateClock, 1000);
function updateClock() {
// uus kuupäev
var date = new Date();
clockHtmlElement.innerHTML = date.toDateString();

//muutujasse paneme date. funktsiooniga saadud vastused
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var dayOfWeek = date.getDay()-1;
var hour = date.getHours();
if (hour<10) {
  hour = (Number) ("0" + hour);
}
var minute = date.getMinutes();
if (minute<10) {
  minute = (Number) ("0" + minute);
}
var second = date.getSeconds();
if (second<10) {
  second = (Number) ("0" + second);
}

// sisestame htmli
clockHtmlElement.innerHTML = estonianWeekDays[dayOfWeek] + "<br>" + day + " : " + estonianMonths[month] + ", " + year  + "<br>" + hour + ": " + minute + ": " + second;
}
  }

}
