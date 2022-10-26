//global variables
var searchButton = document.getElementById("search-btn");
var stateCardTwo = document.getElementById("grid-two");
var stateCardThree = document.getElementById("grid-three");
var stateCardFour = document.getElementById("grid-four");
var stateCardFive = document.getElementById("grid-five");
var stateCardEight = document.getElementById("grid-eight");

//grabs input bar
var stateInput = document.getElementById("search-input");
//function to convert state name in input bar into two-letter state code
function stateCodeSearch() {
    //removes any former search results from the div
    stateCardEight.innerHTML = "";
    //defines variable for text entered into the input bar, converts entry to lowercase
    var stateName = stateInput.value.toLowerCase();
    //checks text entered in input bar for corresponding state
    if (stateName === "alabama" || stateName === "al") {
        //Defines stateCode variable as two-letter state code
        var stateCode = "al"
    } else if (stateName === "alaska" || stateName === "ak") {
        var stateCode = "ak"
    } else if (stateName === "arizona" || stateName === "az") {
        var stateCode = "az"
    } else if (stateName === "arkansas" || stateName === "ar") {
        var stateCode = "ar"
    } else if (stateName === "california" || stateName === "ca") {
        var stateCode = "ca"
    } else if (stateName === "colorado" || stateName === "co") {
        var stateCode = "co"
    } else if (stateName === "connecticut" || stateName === "ct") {
        var stateCode = "ct"
    } else if (stateName === "delaware" || stateName === "de") {
        var stateCode = "de"
    } else if (stateName === "florida" || stateName === "fl") {
        var stateCode = "fl"
    } else if (stateName === "georgia" || stateName === "ga") {
        var stateCode = "ga"
    } else if (stateName === "hawaii" || stateName === "hi") {
        var stateCode = "hi"
    } else if (stateName === "idaho" || stateName === "id") {
        var stateCode = "id"
    } else if (stateName === "illinois" || stateName === "il") {
        var stateCode = "il"
    } else if (stateName === "indiana" || stateName === "in") {
        var stateCode = "in"
    } else if (stateName === "iowa" || stateName === "ia") {
        var stateCode = "ia"
    } else if (stateName === "kansas" || stateName === "ks") {
        var stateCode = "ks"
    } else if (stateName === "kentucky" || stateName === "ky") {
        var stateCode = "ky"
    } else if (stateName === "louisiana" || stateName === "la") {
        var stateCode = "la"
    } else if (stateName === "maine" || stateName === "me") {
        var stateCode = "me"
    } else if (stateName === "maryland" || stateName === "md") {
        var stateCode = "md"
    } else if (stateName === "massachusetts" || stateName === "ma") {
        var stateCode = "ma"
    } else if (stateName === "michigan" || stateName === "mi") {
        var stateCode = "mi"
    } else if (stateName === "minnesota" || stateName === "mn") {
        var stateCode = "mn"
    } else if (stateName === "mississippi" || stateName === "ms") {
        var stateCode = "ms"
    } else if (stateName === "missouri" || stateName === "mo") {
        var stateCode = "mo"
    } else if (stateName === "montana" || stateName === "mt") {
        var stateCode = "mt"
    } else if (stateName === "nebraska" || stateName === "ne") {
        var stateCode = "ne"
    } else if (stateName === "nevada" || stateName === "nv") {
        var stateCode = "nv"
    } else if (stateName === "new hampshire" || stateName === "nh") {
        var stateCode = "nh"
    } else if (stateName === "new jersey" || stateName === "nj") {
        var stateCode = "nj"
    } else if (stateName === "new mexico" || stateName === "nm") {
        var stateCode = "nm"
    } else if (stateName === "new york" || stateName === "ny") {
        var stateCode = "ny"
    } else if (stateName === "north carolina" || stateName === "nc") {
        var stateCode = "nc"
    } else if (stateName === "north dakota" || stateName === "nd") {
        var stateCode = "nd"
    } else if (stateName === "ohio" || stateName === "oh") {
        var stateCode = "oh"
    } else if (stateName === "oklahoma" || stateName === "ok") {
        var stateCode = "ok"
    } else if (stateName === "oregon" || stateName === "or") {
        var stateCode = "or"
    } else if (stateName === "pennsylvania" || stateName === "pa") {
        var stateCode = "pa"
    } else if (stateName === "puerto rico" || stateName === "pr") {
        var stateCode = "pr"
    } else if (stateName === "rhode island" || stateName === "ri") {
        var stateCode = "ri"
    } else if (stateName === "south carolina" || stateName === "sc") {
        var stateCode = "sc"
    } else if (stateName === "south dakota" || stateName === "sd") {
        var stateCode = "sd"
    } else if (stateName === "tennessee" || stateName === "tn") {
        var stateCode = "tn"
    } else if (stateName === "texas" || stateName === "tx") {
        var stateCode = "tx"
    } else if (stateName === "utah" || stateName === "ut") {
        var stateCode = "ut"
    } else if (stateName === "vermont" || stateName === "vt") {
        var stateCode = "vt"
    } else if (stateName === "virginia" || stateName === "va") {
        var stateCode = "va"
    } else if (stateName === "washington" || stateName === "wa") {
        var stateCode = "wa"
    } else if (stateName === "west virginia" || stateName === "wv") {
        var stateCode = "wv"
    } else if (stateName === "wisconsin" || stateName === "wi") {
        var stateCode = "wi"
    } else if (stateName === "wyoming" || stateName === "wy") {
        var stateCode = "wy"
    //If text entered is not recognized as a valid state name, alert box prompts user to enter valid state name
    } else {
        window.alert("PLEASE ENTER A VALID STATE NAME");
        console.log("ERROR");
    }
    console.log(stateCode);
    //function to create park cards based on state entered by user
    function searchState() {
        //declares variable for fetch URL unique to the state entered by user
        var stateURL = ('https://developer.nps.gov/api/v1/parks?stateCode=' + stateCode + '&api_key=PrEprSmQZXCjkYEUgxFRqh1Ybv6fKiFDJIqmU1Iy')
        
        fetch(stateURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.logs object string returned by fetch URL for reference
            console.log(data);
            //creates a loop to create a park card for each object returned by fetch URL
            for(i = 0; i < data.data.length; i++) {
            var nameEl = document.createElement("a"); //<--Should we make this a link to the park info page?
            //var latEl = document.createElement("ul");                 [lattitude coordinates]
            //var lonEl = document.createElement("ul");                 [longitude coordinates]
            var imgEl = document.createElement("img");
            var divEl = document.createElement("div");
            var descriptionDivEl = document.createElement("div"); 
            stateCardEight.appendChild(divEl);
            divEl.classList.add("divel-style");
            divEl.appendChild(nameEl);
            nameEl.innerHTML = data.data[i].fullName;
            nameEl.setAttribute("href", "./index.html");
            //sets id as park code for storeParkCode() function [!!THIS MAY NEED TO CHANGE IF ID IS NEEDED FOR CSS STYLING!!]
            nameEl.setAttribute("id", data.data[i].parkCode)
            //sets title as zip code for storeParkCode() function
            nameEl.setAttribute("title", data.data[0].addresses[0].postalCode)
            nameEl.setAttribute("onclick", "storeParkCode()")       
            //divEl.appendChild(latEl);                                 [lattitude coordinates]
            //latEl.innerHTML = data.data[i].latitude;                  [lattitude coordinates]
            //divEl.appendChild(lonEl);                                 [longitude coordinates]
            //lonEl.innerHTML = data.data[i].longitude                  [longitude coordinates]
            divEl.appendChild(imgEl);
            imgEl.setAttribute("src", data.data[i].images[0].url);
            divEl.appendChild(descriptionDivEl);
            descriptionDivEl.innerHTML = data.data[i].description;
            } 
            
        })
    }

    searchState();
}

//function to set unique park code information to local storage
function storeParkCode() {
    //defines variable for park code
    var parkCodeID = window.event.target.id
    //defines variable for zip code
    var parkCodeZip = window.event.target.title
    //sets park code, zip code to local storage
    localStorage.setItem("parkcode", parkCodeID)
    localStorage.setItem("zip", parkCodeZip)
}

searchButton.addEventListener("click", stateCodeSearch);