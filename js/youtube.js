// Enable strict mode
'use strict'

// Hae hakukenttä
let youtube = document.querySelector('#youtube-search');

// Hae hakupainike
let youtubeSearchBtn = document.querySelector('#youtube-search-btn');

// Hae Näyttökehys
let displayYoutube = document.querySelector('#api-result');



// Add eventlistner for search button
youtubeSearchBtn.addEventListener('click', () => {




// Remember API key publicity issues (security)
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${youtube.value}&key=AIzaSyAXCrZDl1O85dKAfL171IhbvUAe-tds13g&maxResults=1`)
        .then(function(vastaus){
            return vastaus.json();
        }).then(function(json){
        showFoodInfo(json);
    }).catch(function(error){
        console.log(error);
        // Tulostetaan virheilmoitus mikäli haku ei tuota tuloksia
        displayYoutube.innerHTML = "<p class='api-error-msg'>Haku ei tuottanut tuloksia, ole hyvä ja kokeile uudestaan!</p>";
    });

    function showFoodInfo(youtubeInfo) {
        console.log(youtubeInfo);

        displayYoutube.innerHTML = `


        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/${youtubeInfo.items[0].id.videoId}">
        </iframe>
        <br>
        
        
       
        `;



    }
});

