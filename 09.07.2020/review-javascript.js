var firstnameVal = localStorage.getItem("firstname");
var lastname = localStorage.getItem("lastname");
var phone = localStorage.getItem("phone");
var email = localStorage.getItem("email");

var firstnameHTML = document.getElementById("firstname");
var lastnameHTML = document.getElementById("lastname");
var phoneHTML = document.getElementById("phone");
var emailHTML = document.getElementById("mail");

firstnameHTML.innerHTML = firstnameVal;
lastnameHTML.innerHTML = lastname;
phoneHTML.innerHTML = phone;
emailHTML.innerHTML = email;

class Person {
    constructor(firstname, lastname, phone, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
}

function onReviewSubmit() {
    console.log("vajutus töötab");

    // javascript or operator
    // ESIMENE KORD (kui ei ole localStorages)
    // var registrationList = []; --- teeks iga kord tühja registrationListi
    // KUI JUBA ON OLEMAS, SIIS TEEB NII;
    // var registrationList = localStorage.getItem("registrations");
    // (Alati ei saa kasutada, viskab errori kui seda ei ole)

    console.log(localStorage.getItem("registrations"));
    console.log(JSON.parse(localStorage.getItem("registrations")));

    var registrationList = JSON.parse(localStorage.getItem("registrations")) || [];

	// pushimiseks vaja JSON.parse
    registrationList.push(new Person(firstnameVal, lastname, phone, email));

    console.log(registrationList);
    console.log(JSON.stringify(registrationList));
    localStorage.setItem("registrations", JSON.stringify(registrationList));


}
    function onBack() {
        localStorage.setItem("editmode", true);


    }