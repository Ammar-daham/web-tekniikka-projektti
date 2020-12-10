'use strict';
//console.log('map-markers-home tiedosto ladattu');



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
        content: 'Karakallio'
    });


    for(let i = 0; i < products.length; i++) {
        let infowindow = new google.maps.InfoWindow({
            content: `
            <img src="${products[i].imgSrc}" alt="${products[i].name} kuva">
            <br>
            <b>${capitalizeFirstLetter(products[i].name)}</b>
            <br>
            ${capitalizeFirstLetter(products[i].city)}
            `,
        });

        const marker = new google.maps.Marker({
            position: products[i].location,
            map,
            title: products[i].name,
            animation: google.maps.Animation.DROP,
            //animation: google.maps.Animation.DROP,
            //draggable: true,
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

    }



}