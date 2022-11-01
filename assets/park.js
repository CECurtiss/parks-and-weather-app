var longDescript = document.getElementById('longdescript');
var parkCost = document.getElementById('parkcost');
var parkHours = document.getElementById('parkhours');
var petsDecript = document.getElementById('petdescription');
var generalWeather = document.getElementById('generalweather');
var parkContact = document.getElementById('parkcontact');
var parkContainer = document.getElementsByClassName('container');

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
            longDescript.textContent = response.data[0].description;
            parkCost.textContent = response.data[0].entranceFees[0].description;
            parkHours.textContent = response.data[0].operatingHours[0].standardHours;
            generalWeather.textContent = response.data[0].weatherInfo;
            parkContact.textContent = response.data[0].contacts.emailAddresses[0].emailAddress;
            var imgEl = document.createElement('img');
            // imgEl.src= response.data.images[Math.floor(Math.random()* (response.data.images.length))]
            imgEl.setAttribute("src", "response.data.images[Math.floor(Math.random()* (response.data.images.length)]");
            parkContainer.appendChild(imgEl);
        })
    }
    getParkInfo();
}
getParkCode();