'use strict';

let userLat;
let userLng;

navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude)
    userLat = position.coords.latitude;
    console.log(position.coords.longitude)
    userLng = position.coords.longitude;
},
function (error) {
    console.log("The Locator was denied. :(")
});


// User location
//let userLocation = { lat: userLat, lng: userLng };



// Locations as objects (longitude and latitude)
const karakallio = { lat: 60.228960, lng: 24.765220 };
const metropolia = { lat: 60.223850, lng: 24.758650 };
const kavallinmaki = { lat: 60.222830, lng: 24.738500 };
const kauniainen = { lat: 60.211724, lng: 24.728878 };

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const mapOptions = {
        zoom:13,
        center: metropolia
    }
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsRenderer.setMap(map);
    //console.log(map);

    const request = {
        origin: kauniainen,
        destination: metropolia,
        travelMode: 'DRIVING'
    };

    //
    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
            //console.log(result);
        }
    });

}