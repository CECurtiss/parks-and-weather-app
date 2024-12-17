var divEl = $("#fivedayforecast");
var gridEl = $("#gridEl")


var forecastDate = {};
var weatherIcon = {};
var temp = {};
var humidity = {};
var windSpeed = {};
var chanceRain = {};
var rainVol = {};

var currentDate = moment().format('L');

function retrieveLocation() {
    var lat = JSON.parse(localStorage.getItem("lat"));
    var lon = JSON.parse(localStorage.getItem("lon"));
    function currentWeather(){
        var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=f5ca5829ecc4bf04f1d13831ce88f110";
        
        fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            for (var i = 0; i < 40; i += 8){
                forecastDate[i] = response.list[i].dt_txt;
                weatherIcon[i] = response.list[i].weather[0].icon;
                temp[i] = Math.floor(response.list[i].main.temp);
                humidity[i] = Math.floor(response.list[i].main.humidity);
                windSpeed[i] = Math.floor(response.list[i].wind.speed);
                chanceRain[i] = Math.floor(response.list[i].pop * 100);
               
                
                var cardDiv = $("<div>").attr("class", "card").attr("id", "card-1");
                // .attr("style", "width: 15%")
                gridEl.append(cardDiv);
                var cardDivider = $("<div>").attr("class", "card-divider")
                cardDiv.append(cardDivider);
                var newH4 = $("<h4>").attr("id", "carddate").text(moment(forecastDate[i]).format("dddd [\n]L"));
                cardDivider.append(newH4);
                var cardSec = $("<div>").attr("class", "card-section").attr("id", "secId");
                cardDiv.append(cardSec);
                var newIcon = $("<img>").attr("class", "carddate").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon[i] + "@2x.png");
                cardSec.append(newIcon);
                var tempP = $("<p>").attr("class", "cardtemp").text("Temperature: " + temp[i] + "F");
                cardSec.append(tempP);
                var rainChanceP = $("<p>").attr("class", "cardtemp").text("Chance of Rain: " + chanceRain[i] + "%");
                cardSec.append(rainChanceP);
                var newHum = $("<p>").attr("class", "cardtemp").text("Humidity: " + humidity[i] + "%");
                cardSec.append(newHum)
                var newWind = $("<p>").attr("class", "cardtemp").text("Wind Speed: " + windSpeed[i] + " MPH");
                cardSec.append(newWind);
            }
            
        })
    }
    currentWeather();
}
$(retrieveLocation());
