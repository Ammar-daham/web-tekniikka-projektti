'use strict';

// Hae hakukenttä
let food = document.querySelector('#food-search');

// Hae hakupainike
let foodSearchBtn = document.querySelector('#food-search-btn');

// Hae Näyttökehys
let displayFood = document.querySelector('#api-result');



// Add eventlistner for search button
foodSearchBtn.addEventListener('click', () => {

    // Luodaan 3 randomia joilla näytetään annokset, eli joka haussa on 3 uutta ehdotusta randomisti 100 tulosten joukosta
    let ekaEhdotus = Math.floor(Math.random(1) *100 +1);
    console.log(ekaEhdotus);
    let tokaEhdotus = Math.floor(Math.random(1) *100 +1);
    console.log(tokaEhdotus);
    let kolmasEhdotus = Math.floor(Math.random(1) *100 +1);
    console.log(kolmasEhdotus);




// Remember API key publicity issues
    fetch(`https://api.spoonacular.com/food/menuItems/search?query=${food.value}&number=100&apiKey=a52a66d1c41d46b0a7317e5a9d1144d6`)
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        showFoodInfo(json);
    }).catch(function(error){
        console.log(error);
        // Tulostetaan virheilmoitus mikäli haku ei tuota tuloksia
        displayWeather.innerHTML = "<p class='api-error-msg'>Haku ei tuottanut tuloksia, ole hyvä ja kokeile uudestaan!</p>";
    });

    function showFoodInfo(foodInfo) {
        console.log(foodInfo);

        displayFood.innerHTML = `

        Ruoka: ${foodInfo.menuItems[ekaEhdotus].title} <br>
        Saatavilla ravintolassa: ${foodInfo.menuItems[ekaEhdotus].restaurantChain} <br>
        <img src="${foodInfo.menuItems[ekaEhdotus].image}" alt="food image"> <br>
        <br><br>
        Ruoka: ${foodInfo.menuItems[tokaEhdotus].title} <br>
        Saatavilla ravintolassa: ${foodInfo.menuItems[tokaEhdotus].restaurantChain} <br>
        <img src="${foodInfo.menuItems[tokaEhdotus].image}" alt="food image"> <br>
        <br><br>
        Ruoka: ${foodInfo.menuItems[kolmasEhdotus].title} <br>
        Saatavilla ravintolassa: ${foodInfo.menuItems[kolmasEhdotus].restaurantChain} <br>
        <img src="${foodInfo.menuItems[kolmasEhdotus].image}" alt="food image"> <br>
       
        `;



    }
});


/// MUISTA jokaisella annoksella ei vältämättä ole kuva
/// Muista että haku ei vältämättä tuota tuloksia



