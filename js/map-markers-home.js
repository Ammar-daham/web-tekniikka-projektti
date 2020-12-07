'use strict';

let map;
const options = {
    center: { lat: 60.223850, lng: 24.758630 },
    zoom: 14,
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map-markers-home"), options);

    const metropolia = new google.maps.Marker({
        position: { lat: 60.223850, lng: 24.758650 },
        map,
        title: "Karakallio",
        animation: google.maps.Animation.BOUNCE,
        //animation: google.maps.Animation.DROP,
        //draggable: true,
    });

    const karakallio = new google.maps.Marker({
        position: { lat: 60.228960, lng: 24.765220 },
        map,
        title: "Metropolia Ammattikorkeakoulu",
        //animation: google.maps.Animation.BOUNCE,
        animation: google.maps.Animation.DROP,
        //draggable: true,
    });

    const kavallinmaki = new google.maps.Marker({
        position: { lat: 60.222830, lng: 24.738500 },
        map,
        title: "Metropolia Ammattikorkeakoulu",
        //animation: google.maps.Animation.BOUNCE,
        animation: google.maps.Animation.DROP,
        //draggable: true,
    });
}