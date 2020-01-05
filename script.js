window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      if (!(isNaN(pilotName.value)) || !(isNaN(copilotName.value))) {
         alert("Please enter a string for both names.");
         event.preventDefault();
      };
      if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
         alert("Please enter a number for fuel and cargo mass.");
         event.preventDefault();
      }
      //alert("submit clicked");
   })

   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   pilotStatus.innerHTML = `${form.pilotName.value} ready`;
   this.console.log(pilotStatus.innerHTML)
   let copilotStatus = document.getElementById("copilotStatus");
   copilotStatus.innerHTML = `${form.copilotName.value} ready`;
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");

   if (form.fuelLevel.value < 10,000) {
      launchStatus.innerHTML = "Shuttle not ready for launch.";
      console.log(launchStatus.innerHTML)
      fuelStatus.innerHTML = "Fuel level too low for successful journey.";
      faultyItems.style.visibility = "visible";
   } //else if (cargoMass)


})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
