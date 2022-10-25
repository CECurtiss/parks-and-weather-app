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
    //defines variable for text entered into the input bar
    var stateName = stateInput.value;
    //checks text entered in input bar for corresponding state
    if (stateName === "Alabama" || stateName === "alabama" || stateName === "ALABAMA" || stateName === "al" || stateName === "AL") {
        //Defines stateCode variable as two-letter state code
        var stateCode = "al"
    } else if (stateName === "Alaska" || stateName === "alaska" || stateName === "ALASKA" || stateName === "ak" || stateName === "AK") {
        var stateCode = "ak"
    } else if (stateName === "Arizona" || stateName === "arizona" || stateName === "ARIZONA" || stateName === "az" || stateName === "AZ") {
        var stateCode = "az"
    } else if (stateName === "Arkansas" || stateName === "arkansas" || stateName === "ARKANSAS" || stateName === "ar" || stateName === "AR") {
        var stateCode = "ar"
    } else if (stateName === "California" || stateName === "california" || stateName === "CALIFORNIA" || stateName === "ca" || stateName === "CA") {
        var stateCode = "ca"
    } else if (stateName === "Colorado" || stateName === "colorado" || stateName === "COLORADO" || stateName === "co" || stateName === "CO") {
        var stateCode = "co"
    } else if (stateName === "Connecticut" || stateName === "connecticut" || stateName === "CONNECTICUT" || stateName === "ct" || stateName === "CT") {
        var stateCode = "ct"
    } else if (stateName === "Delaware" || stateName === "delaware" || stateName === "DELAWARE" || stateName === "de" || stateName === "DE") {
        var stateCode = "de"
    } else if (stateName === "Florida" || stateName === "florida" || stateName === "FLORIDA" || stateName === "fl" || stateName === "FL") {
        var stateCode = "fl"
    } else if (stateName === "Georgia" || stateName === "georgia" || stateName === "GEORGIA" || stateName === "ga" || stateName === "GA") {
        var stateCode = "ga"
    } else if (stateName === "Hawaii" || stateName === "hawaii" || stateName === "HAWAII" || stateName === "hi" || stateName === "HI") {
        var stateCode = "hi"
    } else if (stateName === "Idaho" || stateName === "idaho" || stateName === "IDAHO" || stateName === "id" || stateName === "ID") {
        var stateCode = "id"
    } else if (stateName === "Illinois" || stateName === "illinois" || stateName === "ILLINOIS" || stateName === "il" || stateName === "IL") {
        var stateCode = "il"
    } else if (stateName === "Indiana" || stateName === "indiana" || stateName === "INDIANA" || stateName === "in" || stateName === "IN") {
        var stateCode = "in"
    } else if (stateName === "Iowa" || stateName === "iowa" || stateName === "IOWA" || stateName === "ia" || stateName === "IA") {
        var stateCode = "ia"
    } else if (stateName === "Kansas" || stateName === "kansas" || stateName === "KANSAS" || stateName === "ks" || stateName === "KS") {
        var stateCode = "ks"
    } else if (stateName === "Kentucky" || stateName === "kentucky" || stateName === "KENTUCKY" || stateName === "ky" || stateName === "KY") {
        var stateCode = "ky"
    } else if (stateName === "Louisiana" || stateName === "louisiana" || stateName === "LOUISIANA" || stateName === "la" || stateName === "LA") {
        var stateCode = "la"
    } else if (stateName === "Maine" || stateName === "maine" || stateName === "MAINE" || stateName === "me" || stateName === "ME") {
        var stateCode = "me"
    } else if (stateName === "Maryland" || stateName === "maryland" || stateName === "MARYLAND" || stateName === "md" || stateName === "MD") {
        var stateCode = "md"
    } else if (stateName === "Massachusetts" || stateName === "massachusetts" || stateName === "MASSACHUSETTS" || stateName === "ma" || stateName === "MA") {
        var stateCode = "ma"
    } else if (stateName === "Michigan" || stateName === "michigan" || stateName === "MICHIGAN" || stateName === "mi" || stateName === "MI") {
        var stateCode = "mi"
    } else if (stateName === "Minnesota" || stateName === "minnesota" || stateName === "MINNESOTA" || stateName === "mn" || stateName === "MN") {
        var stateCode = "mn"
    } else if (stateName === "Mississippi" || stateName === "mississippi" || stateName === "MISSISSIPPI" || stateName === "ms" || stateName === "MS") {
        var stateCode = "ms"
    } else if (stateName === "Missouri" || stateName === "missouri" || stateName === "MISSOURI" || stateName === "mo" || stateName === "MO") {
        var stateCode = "mo"
    } else if (stateName === "Montana" || stateName === "montana" || stateName === "MONTANA" || stateName === "mt" || stateName === "MT") {
        var stateCode = "mt"
    } else if (stateName === "Nebraska" || stateName === "nebraska" || stateName === "NEBRASKA" || stateName === "ne" || stateName === "NE") {
        var stateCode = "ne"
    } else if (stateName === "Nevada" || stateName === "nevada" || stateName === "NEVADA" || stateName === "nv" || stateName === "NV") {
        var stateCode = "nv"
    } else if (stateName === "New Hampshire" || stateName === "new hampshire" || stateName === "NEW HAMPSHIRE" || stateName === "nh" || stateName === "NH") {
        var stateCode = "nh"
    } else if (stateName === "New Jersey" || stateName === "new jersey" || stateName === "NEW JERSEY" || stateName === "nj" || stateName === "NJ") {
        var stateCode = "nj"
    } else if (stateName === "New Mexico" || stateName === "new mexico" || stateName === "NEW MEXICO" || stateName === "nm" || stateName === "NM") {
        var stateCode = "nm"
    } else if (stateName === "New York" || stateName === "new york" || stateName === "NEW YORK" || stateName === "ny" || stateName === "NY") {
        var stateCode = "ny"
    } else if (stateName === "North Carolina" || stateName === "north carolina" || stateName === "NORTH CAROLINA" || stateName === "nc" || stateName === "NC") {
        var stateCode = "nc"
    } else if (stateName === "North Dakota" || stateName === "north dakota" || stateName === "NORTH DAKOTA" || stateName === "nd" || stateName === "ND") {
        var stateCode = "nd"
    } else if (stateName === "Ohio" || stateName === "ohio" || stateName === "OHIO" || stateName === "oh" || stateName === "OH") {
        var stateCode = "oh"
    } else if (stateName === "Oklahoma" || stateName === "oklahoma" || stateName === "OKLAHOMA" || stateName === "ok" || stateName === "OK") {
        var stateCode = "ok"
    } else if (stateName === "Oregon" || stateName === "oregon" || stateName === "OREGON" || stateName === "or" || stateName === "OR") {
        var stateCode = "or"
    } else if (stateName === "Pennsylvania" || stateName === "pennsylvania" || stateName === "PENNSYLVANIA" || stateName === "pa" || stateName === "PA") {
        var stateCode = "pa"
    } else if (stateName === "Puerto Rico" || stateName === "puerto rico" || stateName === "PUERTO RICO" || stateName === "pr" || stateName === "PR") {
        var stateCode = "pr"
    } else if (stateName === "Rhode Island" || stateName === "rhode island" || stateName === "RHODE ISLAND" || stateName === "ri" || stateName === "RI") {
        var stateCode = "ri"
    } else if (stateName === "South Carolina" || stateName === "south carolina" || stateName === "SOUTH CAROLINA" || stateName === "sc" || stateName === "SC") {
        var stateCode = "sc"
    } else if (stateName === "South Dakota" || stateName === "south dakota" || stateName === "SOUTH DAKOTA" || stateName === "sd" || stateName === "SD") {
        var stateCode = "sd"
    } else if (stateName === "Tennessee" || stateName === "tennessee" || stateName === "TENNESSEE" || stateName === "tn" || stateName === "TN") {
        var stateCode = "tn"
    } else if (stateName === "Texas" || stateName === "texas" || stateName === "TEXAS" || stateName === "tx" || stateName === "TX") {
        var stateCode = "tx"
    } else if (stateName === "Utah" || stateName === "utah" || stateName === "UTAH" || stateName === "ut" || stateName === "UT") {
        var stateCode = "ut"
    } else if (stateName === "Vermont" || stateName === "vermont" || stateName === "VERMONT" || stateName === "vt" || stateName === "VT") {
        var stateCode = "vt"
    } else if (stateName === "Virginia" || stateName === "virginia" || stateName === "VIRGINIA" || stateName === "va" || stateName === "VA") {
        var stateCode = "va"
    } else if (stateName === "Washington" || stateName === "washington" || stateName === "WASHINGTON" || stateName === "wa" || stateName === "WA") {
        var stateCode = "wa"
    } else if (stateName === "West Virginia" || stateName === "west virginia" || stateName === "WEST VIRGINIA" || stateName === "wv" || stateName === "WV") {
        var stateCode = "wv"
    } else if (stateName === "Wisconsin" || stateName === "wisconsin" || stateName === "WISCONSIN" || stateName === "wi" || stateName === "WI") {
        var stateCode = "wi"
    } else if (stateName === "Wyoming" || stateName === "wyoming" || stateName === "WYOMING" || stateName === "wy" || stateName === "WY") {
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
            var nameEl = document.createElement("h2"); //<--Should we make this a link to the park info page?
            //var latEl = document.createElement("ul");                 [lattitude coordinates]
            //var lonEl = document.createElement("ul");                 [longitude coordinates]
            var imgEl = document.createElement("img");
            var divEl = document.createElement("div");
            var descriptionDivEl = document.createElement("div");
            
            stateCardEight.appendChild(divEl);
            divEl.classList.add("divel-style");
            divEl.appendChild(nameEl);
            nameEl.innerHTML = data.data[i].fullName;                    
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

searchButton.addEventListener("click", stateCodeSearch);