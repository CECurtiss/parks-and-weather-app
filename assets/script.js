//global variables
//grabs search button
var searchButton = document.getElementById("searchBtn");
//grabs park card container div for dynamic park card creation
var parkCardContainer = document.getElementById("park-card-container");
//grabs input bar
var stateInput = document.getElementById("search-input");
//function to convert state name in input bar into two-letter state code
function stateCodeSearch() {
    //removes any former search results from the div
    parkCardContainer.innerHTML = "";
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
        var invalidState = document.createElement("h4");
        invalidState.innerHTML = 'Unable to find any results for "' + stateName + '". Please enter a valid state name.';
        parkCardContainer.appendChild(invalidState);
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
            for(i =0; i < data.data.length; i++) {
            //creates foundation-sites styling card div
            var cell = document.createElement("div");
            //assigns classes for foundation-sites styling
            cell.classList.add("cell");
            cell.classList.add("small-12");
            cell.classList.add("medium-6");
            //creates park card div
            var containerEl = document.createElement("div");
            containerEl.classList.add("card");
            //creates park name div
            var nameElContainer = document.createElement("div");
            nameElContainer.classList.add("card-divider");
            //creates park name as link to parkinfo.html
            var nameEl = document.createElement("a");
            //links to parkinfo.html
            nameEl.setAttribute("href", "./parkinfo.html");
            //sets id as parkCode to be saved in local storage for use in parkinfo.html
            nameEl.setAttribute("id", data.data[i].parkCode);
            //sets title to zip code to be saved in local storage for use in parkinfo.html
            nameEl.setAttribute("title", data.data[i].latitude);
            nameEl.setAttribute("rel", data.data[i].longitude);
            //creates onclick function to save to local storage
            nameEl.setAttribute("onclick", "storeParkCode()");  
            nameEl.innerHTML = data.data[i].fullName;
            //creates div for image
            var imgDiv = document.createElement("div");
            imgDiv.classList.add("card-section");
            //creates image element
            var imgEl = document.createElement("img");
            //sets image element to specific park image
            imgEl.setAttribute("src", data.data[i].images[Math.floor(Math.random() * (data.data[i].images.length))].url)
                // var imgNextBtn = document.createElement("button");
                // imgNextBtn.setAttribute("onclick", "nextImage()");
                // imgNextBtn.setAttribute("id", "next-image-btn");
                // imgNextBtn.setAttribute("title", data.data[i].parkCode)
            // imgNextBtn.setAttribute("")
                // var imgPrevBtn = document.createElement("button");
                // imgPrevBtn.setAttribute("onclick", "previousImage()");
                // imgPrevBtn.setAttribute("id", "previous-image-btn");
                // imgPrevBtn.setAttribute("title", data.data[i].parkCode)
            // imgPrevBtn.setAttribute("onclick", )
            //creates park description div
            var descriptionElContainer = document.createElement("div");
            //creates park description paragraph element
            var descriptionEl = document.createElement("p");
            descriptionElContainer.classList.add("card-section");
            descriptionEl.innerHTML = data.data[i].description;
            //appends above created children elements to their respective parents
            imgDiv.appendChild(imgEl);
            descriptionElContainer.appendChild(descriptionEl);
    //can't get the previous/next image butons to display in the HTML...
                // nameElContainer.appendChild(imgPrevBtn);
            nameElContainer.appendChild(nameEl);
                // nameElContainer.appendChild(imgNextBtn);
            
            containerEl.appendChild(nameElContainer);
            containerEl.appendChild(imgDiv);
            containerEl.appendChild(descriptionElContainer);
            cell.appendChild(containerEl)
            parkCardContainer.appendChild(cell);
            }      
        })
    }
    searchState();
}

// function nextImage() {

//}

//function to set unique park code/zip code information to local storage
function storeParkCode() {
    //defines variable for park code
    var parkCodeID = window.event.target.id
    //defines variable for zip code
    var parkCodeLat = window.event.target.title
    var parkCodeLon = window.event.target.rel
    //sets park code, zip code to local storage
    localStorage.setItem("parkcode", parkCodeID)
    localStorage.setItem("lat", parkCodeLat)
    localStorage.setItem("lon", parkCodeLon)
}

//creates event listener for search button
searchButton.addEventListener("click", stateCodeSearch);


/*
//ParkInfo.html js
// select div to append response
var divClass = $(".cardPgTwo")
// variables for response
var forecastDate = {};
var weatherIcon = {};
var temp = {};
var humidity = {};
var windSpeed = {};
var chanceRain = {};
var rainVol = {};

var currentDate = moment().format('L');
// pull zip code from local storage
function retrieveLocation() {
    var location = JSON.parse(localStorage.getItem("zip"));
    function currentWeather(){
        var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=imperial&appid=f5ca5829ecc4bf04f1d13831ce88f110";
        
        fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            for (var i = 0; i < 40; i += 8){
                forecastDate[i] = response.list[i].dt_txt;
                weatherIcon[i] = response.list[i].weather[0].icon;
                temp[i] = response.list[i].main.temp;
                humidity[i] = response.list[i].main.humidity;
                windSpeed[i] = response.list[i].wind.speed;
                chanceRain[i] = response.list[i].pop;
                console.log(weatherIcon);
                // rainVol[i] = response.list[i].rain.3h;
                    // can not get response due to number "3"
                var newCard = $("<div>").attr("class", "card");
                divClass.append(newCard);
                var newH2 = $("<h2>").attr("id", "carddate").text(moment(forecastDate[i]).format("dddd " + "L"));
                newCard.append(newH2);
                // var newIcon = $("<img>").attr("class", "carddate").attr("srs", "https://openweathermap.org/img/wn/" + weatherIcon[i] + "@2x.png");
                // newCard.append(newIcon);
                var tempP = $("<p>").attr("class", "cardtemp").text("Temperature: " + temp[i] + "F");
                newCard.append(tempP);
                var rainChanceP = $("<p>").attr("class", "cardtemp").text("Chance of Rain: " + chanceRain[i] * 100 + "%");
                newCard.append(rainChanceP);
            //     var newVol = $("<p>").attr("class", "cardtemp").text("3 Hour rain volume: " + rainVol[i]);
            //     newCard.append(newVol);
            }
            
        })
    }
    currentWeather();
}
*/