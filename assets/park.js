var longDescript = document.getElementById('longdescript');
var parkCost = document.getElementById('parkcost');
var parkHours = document.getElementById('parkhours');
var petsDecript = document.getElementById('petdescription');
var generalWeather = document.getElementById('generalweather');
var parkContact = document.getElementById('parkcontact');

function getParkCode() {
    var parkCodeSearch = localStorage.getItem('parkcode');
    function getParkInfo() {
        var parkCodeUrl = ('https://developer.nps.gov/api/v1/parks?parkCode=' + parkCodeSearch + '&api_key=PrEprSmQZXCjkYEUgxFRqh1Ybv6fKiFDJIqmU1Iy')
        fetch(parkCodeUrl)
        .then (function(response) {
        return response.json() ;
        })
        .then (function(response) {
            console.log(response);
            longDescript.textContent = response.data.description;
            parkCost.textContent = response.data.entranceFees[0].description;
            parkHours.textContent = response.data.operatingHours.standardHours;
            generalWeather.textContent = response.data.weatherInfo;
            parkContact.textContent = response.data.contacts.emailAddresses.emailAddress;
            var imgEl = document.createElement('img');
            imgEl.setAttribute("src", "response.data.images[Math.floor(Math.random()* (response.data.images.length");
        })
    }
    getParkInfo();
}
getParkCode();