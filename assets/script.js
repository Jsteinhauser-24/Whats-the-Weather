var card = document.getElementsByClassName("#card")
var APIkey = "https://api.openweathermap.org/data/2.5/forecast?lat=1&lon=1&appid=5449c484011cd4324f0163078b3d1824"
var btn = document.querySelector(".btn")
var inputCity = document.querySelector("#city")
var city = []




btn.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(inputCity.value);
    getCurrentWeather(inputCity.value);
})

function getCurrentWeather(city){
    var currentcity = "http://api.openweathermap.org/geo/1.0/direct?q=" + city +"&limit=5&appid=5449c484011cd4324f0163078b3d1824"
    fetch(currentcity)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data[0].lat);
        console.log(data[0].lon);
        weatherData(data[0].lat, data[0].lon)
        weatherlater(data[0].lat, data[0].lon)

        localStorage.setItem("city", inputCity);
        rendercity()
    });

function rendercity() {
    var lastcity = (localStorage.getItem("city"));
    console.log(inputCity)
}
   
}

function weatherData(lat, lon){
    var weatherNow = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5449c484011cd4324f0163078b3d1824&units=imperial"
    fetch(weatherNow)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('cityname').textContent = inputCity.value
        document.getElementById('date').textContent = dayjs().format('MMM D, YYYY')
        document.getElementById('temp').textContent = "Temperature " + data.main.temp + "°F"
        document.getElementById('humidity').textContent = "Humidity " + data.main.humidity + "%"
        document.getElementById('wind').textContent = "Wind Speed " + data.wind.speed + "mph"
        document.getElementById('img').src = "https://openweathermap.org/img/wn/" + data.weather.icon+".png";

    })
}

function weatherlater(lat, lon) {
    var fivedays = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=5449c484011cd4324f0163078b3d1824&units=imperial"
    fetch(fivedays)
    .then(function(response) {
       return response.json();    
    })
    .then(function(data) {
       console.log(data);
       for(i=0; i < 4; i++){
        document.getElementById("day" +(i+1)) = data.list[i].dt_txt
        document.getElementById("day" +(i+1)+ "temp") = data.list[i].main.temp
        document.getElementById("day" +(i+1)+ "humidity") = data.list[i].main.humidity
        document.getElementById("day" +(i+1)+ "wind") = data.list[i].main.wind
       }
    })
}