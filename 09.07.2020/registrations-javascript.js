document.getElementById("coffee");
coffee.innerHTML = "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>";

function render() {
   var registrations = JSON.parse(localStorage.getItem("registrations")) || [];
   var registrationsCount= length;
   console.log(registrationsCount);

   const ul = document.createElement("ul");
   console.log(ul);

   var i = 1;
   registrations.forEach((person)=>{
       console.log(person);
       const li = document.createElement("li");

       const div = document.createElement("div");
       div.innerHTML = "<b>" + person.firstname + " " + person.lastname;

       const divContact = document.createElement("div");
       divContact.innerHTML = "<u>" + "Eesnimi:   " +"</u>" + person.firstname + "<u>" + " Perekonnanimi:   " +"</u>"  + person.lastname + "<u>" + " Telefon:   " +"</u>"  + person.phone + "<u>" + " Mail:   " +"</u>"  + person.email;

        const inActiveButton = document.createElement("div");
       inActiveButton.innerHTML = "Muuda mitteaktiivseks";
       inActiveButton.classList.add("inactive-button");

      // inActiveButton.addEventListener(click , () =>{})
      // inActiveButton.addEventListener(click , function(){})

      inActiveButton.addEventListener('click' , () =>{
          if (!div.classList.contains("inactive")) {
            div.classList.add("inactive");
            divContact.classList.add("inactive");
          } else {
            div.classList.remove("inactive");
            divContact.classList.remove("inactive");
          }
      })

       i = i + 1;
       li.appendChild(div);
       li.appendChild(divContact);
       li.appendChild(inActiveButton);

        console.log(li);
        ul.appendChild(li);
   })
   console.log(ul);



   document.body.appendChild(ul);






}