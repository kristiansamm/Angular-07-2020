console.log("Javascript ühendatud HTMLga");

// document - käib läbi HTMLi
document.getElementById("hello");

// logime välja konsooli hello HTML elemendi
console.log(document.getElementById("hello"));

// Paneme eraldi muutujasse. var = variable
var helloHtmlElement = document.getElementById("hello");

// Täpselt sama väljalogimine nagu õleval
console.log(helloHtmlElement);


//innerHTMLiga muudame HTMLi sisest väärtust
helloHtmlElement.innerHTML = "Tere tulemast";

// Teeme sama asja mis üleval (printisime välja)
var clockHtmlElement = document.getElementById("clock");
console.log(clockHtmlElement);

// massiiv / list. Elemendid hakkavad 0-st. Täidame ise muutuja andmetega (enne funktsioonide kaudu)
var estonianMonths = ["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
var estonianWeekDays = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev", "Puhapäev"];


console.log(estonianMonths[6]);


updateClock();
setInterval(updateClock, 1000);
function updateClock() {
// uus kuupäev
var date = new Date();
clockHtmlElement.innerHTML = date;

//muutujasse paneme date. funktsiooniga saadud vastused
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var dayOfWeek = date.getDay()-1;
var hour = date.getHours();
if (hour<10) {
    console.log("Tund on väiksem kui 10");
} else {
    console.log("Tund on suurem kui 10");
}
var minute = date.getMinutes();
if (minute<10) {
    console.log("Minut on väiksem kui 10");
} else {
    console.log("Minut on suurem kui 10");
}
var second = date.getSeconds();
if (second<10) {
    console.log("Sekund on väiksem kui 10");
} else {
    console.log("Sekund on suurem kui 10");
}

// sisestame htmli
clockHtmlElement.innerHTML = estonianWeekDays[dayOfWeek] + "<br>" + day + " : " + estonianMonths[month] + ", " + year  + "<br>" + hour + ": " + minute + ": " + second;

// // kontrollime, et on olemas
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(dayOfWeek);
// console.log(hour);
// console.log(minute);
//console.log(second);
}