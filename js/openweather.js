'use strict';

// Hae hakukenttä
let city = document.querySelector('#city-search');

// Hae hakupainike
let citySearchBtn = document.querySelector('#city-search-btn');

// Hae Näyttökehys
let displayWeather = document.querySelector('#api-result');

// Add eventlistner for search button
citySearchBtn.addEventListener('click', () => {

// Remember API key publicity issues
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=2c3ba5d05551904c1b1dad12ed71f32b&units=metric&lang=FI`)
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        showWeatherInfo(json);
    }).catch(function(error){
        console.log(error);
        // Tulostetaan virheilmoitus mikäli haku ei tuota tuloksia
        displayWeather.innerHTML = "<p class='api-error-msg'>Haku ei tuottanut tuloksia, ole hyvä ja kokeile uudestaan!</p>";
    });

    function showWeatherInfo(weatherInfo) {
        console.log(weatherInfo);

        displayWeather.innerHTML = `
        Paikkakunnan ${weatherInfo.name} säätiedot: <br>
        Lämpötila: ${Math.round(weatherInfo.main.temp)} (${weatherInfo.main.temp}), ${weatherInfo.weather[0].description} <br>
        Tuuli: ${Math.round(weatherInfo.wind.speed)} m/s <br>
        
        `;


    }
});




