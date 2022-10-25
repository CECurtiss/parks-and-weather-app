//example URL
/*
var npsUrl = ('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=PrEprSmQZXCjkYEUgxFRqh1Ybv6fKiFDJIqmU1Iy');
//                                                        ^^we'll want to create a function that changes this part of the URL depending on the user input
var unorganizedListEl = document.getElementById("list");

function testFunction() {
    //fetch URL
    fetch(npsUrl)
    //return JSON
    .then(function (response) {
        return response.json();
    })
    //work with JSON information
    .then(function (data) {
        console.log(data)
        //function that loops through all the activities for the given national park
        for(i =0; i < data.data[0].activities.length; i++) {
        //assigns a variable respresenting each activity in the loop
        var info = data.data[0].activities[i].name
        //creates a list item in the DOM for each activity in the loop
        var listy = document.createElement("li");
        unorganizedListEl.appendChild(listy);
        listy.innerHTML = info
        }
    })
} */

var stateCode = "ks"
var searchButton = document.getElementById("search-btn")
var stateCardTwo = document.getElementById("grid-two")
var stateCardThree = document.getElementById("grid-three")

function searchState() {
    
    var stateURL = ('https://developer.nps.gov/api/v1/parks?stateCode=' + stateCode + '&api_key=PrEprSmQZXCjkYEUgxFRqh1Ybv6fKiFDJIqmU1Iy')

    fetch(stateURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for(i = 0; i < data.data.length; i++) {
        var latEl = document.createElement("ul");
        stateCardTwo.appendChild(latEl)
        latEl.innerHTML = data.data[i].latitude
        var lonEl = document.createElement("ul");
        stateCardThree.appendChild(lonEl)
        lonEl.innerHTML = data.data[i].longitude
        }
    })
}

searchButton.addEventListener("click", searchState);