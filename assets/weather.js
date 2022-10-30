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
                
                var cardDiv = $("<div>").attr("class", "card").attr("id", "card-1").attr("style", "width: 50px");
                gridEl.append(cardDiv);
                var cardDivider = $("<div>").attr("class", "card-divider")
                cardDiv.append(cardDivider);
                var newH4 = $("<h4>").attr("id", "carddate").text(moment(forecastDate[i]).format("dddd   " + "L"));
                cardDivider.append(newH4);
                var cardSec = $("<div>").attr("class", "card-section");
                cardDiv.append(cardSec);
                var newIcon = $("<img>").attr("class", "carddate").attr("srs", "https://openweathermap.org/img/wn/" + weatherIcon[i] + "@2x.png");
                cardSec.append(newIcon);
                var tempP = $("<p>").attr("class", "cardtemp").attr("style", "margin-top: 16px").text("Temperature: " + temp[i] + "F");
                cardSec.append(tempP);
                var rainChanceP = $("<p>").attr("class", "cardtemp").text("Chance of Rain: " + chanceRain[i] * 100 + "%");
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