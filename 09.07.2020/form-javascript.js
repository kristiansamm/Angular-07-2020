var registrationsDiv = document.getElementById("registrations");
console.log(registrationsDiv);
var registrationsData = "";

function onSubmit(e) {
    // preventDefault abil ei tule refreshi
    // e tähendab eventi
    e.preventDefault();
    console.log(e);
    console.log("töötab")

var registrationForm = document.forms["registrationForm"];
console.log(registrationForm);
console.log(registrationForm["firstname"]);
console.log(registrationForm["firstname"].value);

var firstname = registrationForm["firstname"].value;
console.log(firstname);
var lastname = registrationForm["lastname"].value;
console.log(lastname);
var number = registrationForm["phone"].value;
console.log(number);
var email = registrationForm["mail"].value;
console.log(email);

registrationForm.reset();

registrationsData = registrationsData + "Eesnimi: " + firstname + ". Perekonnanimi: " + lastname + ". Telefon: " + number + ". E-mail: " + email + "<br>";
registrationsDiv.innerHTML = registrationsData;

localStorage.setItem("firstname", firstname);
localStorage.setItem("lastname", lastname);
localStorage.setItem("phone", number);
localStorage.setItem("email", email);

location.href = "review.html";












}