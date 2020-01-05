window.addEventListener("load", function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");

         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
         `

      })
   })
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


   
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `${pilotName.value} ready`;
      //console.log(pilotStatus.innerHTML);
   
      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `${copilotName.value} ready`;
      //console.log(copilotStatus.innerHTML);
   
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
   
      let launchStatus = document.getElementById("launchStatus");
      //console.log(launchStatus.innerHTML)

      let faultyItems = document.getElementById("faultyItems");
      //console.log(faultyItems);

      if (fuelLevel.value < 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";
         //console.log(launchStatus.innerHTML)
         fuelStatus.innerHTML = "Fuel level too low for successful journey.";
         event.preventDefault();
         
      } else if (cargoMass.value > 10000) {
         cargoStatus.innerHTML = "Cargo mass too heavy for take off.";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
         event.preventDefault();
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch!";
         launchStatus.style.color = "green";

      }
      event.preventDefault();  
   })
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
