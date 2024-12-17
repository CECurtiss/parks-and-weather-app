var longDescript = document.getElementById("longdescript");
var parkCost = document.getElementById("parkcost");
var parkHours = document.getElementById("parkhours");
var petsDecript = document.getElementById("petdescription");
var generalWeather = document.getElementById("generalweather");
var parkContact = document.getElementById("parkcontact");
var parkContainer = document.querySelector(".parkContainer");
var parkName = document.querySelector("#parkname");

function getParkCode() {
  var parkCodeSearch = localStorage.getItem("parkcode");
  console.log(parkCodeSearch);
  function getParkInfo() {
    var parkCodeUrl =
      "https://developer.nps.gov/api/v1/parks?parkCode=" +
      parkCodeSearch +
      "&api_key=PrEprSmQZXCjkYEUgxFRqh1Ybv6fKiFDJIqmU1Iy";
    fetch(parkCodeUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        parkName.textContent = response.data[0].name;
        var imgEl = document.createElement("img");
        imgEl.setAttribute(
          "src",
          response.data[0].images[
            Math.floor(Math.random() * response.data[0].images.length)
          ].url
        );
        var imgDivEl = document.createElement("div");
        imgDivEl.classList.add("imagediv");
        imgDivEl.appendChild(imgEl);
        parkContainer.appendChild(imgDivEl);
        console.log(parkHours.textContent);
        longDescript.textContent = response.data[0].description;
        parkCost.textContent = response.data[0].entranceFees[0];
        var sundayEl = document.createElement("p");
        sundayEl.textContent =
          "Sunday - " + response.data[0].operatingHours[0].standardHours.sunday;
        parkHours.appendChild(sundayEl);
        var mondayEl = document.createElement("p");
        mondayEl.textContent =
          "Monday - " + response.data[0].operatingHours[0].standardHours.monday;
        parkHours.appendChild(mondayEl);
        var tuesdayEl = document.createElement("p");
        tuesdayEl.textContent =
          "Tuesday - " +
          response.data[0].operatingHours[0].standardHours.tuesday;
        parkHours.appendChild(tuesdayEl);
        var wednesdayEl = document.createElement("p");
        wednesdayEl.textContent =
          "Wednesday - " +
          response.data[0].operatingHours[0].standardHours.wednesday;
        parkHours.appendChild(wednesdayEl);
        var thursdayEl = document.createElement("p");
        thursdayEl.textContent =
          "Thursday - " +
          response.data[0].operatingHours[0].standardHours.thursday;
        parkHours.appendChild(thursdayEl);
        var fridayEl = document.createElement("p");
        fridayEl.textContent =
          "Friday - " + response.data[0].operatingHours[0].standardHours.friday;
        parkHours.appendChild(fridayEl);
        var saturdayEl = document.createElement("p");
        saturdayEl.textContent =
          "Saturday - " +
          response.data[0].operatingHours[0].standardHours.saturday;
        parkHours.appendChild(saturdayEl);

        generalWeather.textContent = response.data[0].weatherInfo;
        parkContact.textContent =
          "Park Contact info: " +
          response.data[0].contacts.emailAddresses[0].emailAddress;
      });
  }
  getParkInfo();
}
getParkCode();
