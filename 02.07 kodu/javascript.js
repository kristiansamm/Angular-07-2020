console.log("javascript on ühendatud html´ga");

var year = 2020;
var month = 8;
var day = 20;
var hour = 12;
var minute = 00;
var second = 00;

var timeRemaining = document.getElementById("timeRemaining");

var date = new Date();
console.log(date);
var yearsRemaining = year - date.getFullYear();
var hoursRemaining = hour - date.getHours();
if (hoursRemaining < 0) {
    hoursRemaining = hoursRemaining +24;
    minutesRemaining - 1;

var minutesRemaining = minute - date.getMinutes();
console.log(minutesRemaining);
if (minutesRemaining < 0) {
    minutesRemaining = minutesRemaining +60;
    hoursRemaining - 1;
}

var secondsRemaining = second - date.getSeconds();
console.log(seconds);
if (secondsRemaining < 0) {
    secondsRemaining = secondsRemaining +60;
    minutesRemaining - 1;
}

timeRemaining.innerHTML = yearsRemaining + ":"+ hoursRemaining + ":"+ minutesRemaining 