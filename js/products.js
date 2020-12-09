// Enable Strict Mode
'use strict';


// products table
const products = [
    {
        id: 0,
        name: 'classic bike',
        desc: 'There are many variations',
        tag: 'Gray',
        price: 80,
        inCart: 0,
        imgSrc: "./img/bike/1.png",
        location: { lat: 60.249599, lng: 24.065550 },
        city: 'lohja',
        category: 'bike',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 1,
        name: 'lady bike',
        desc: 'There are many variations',
        tag: 'colorful',
        price: 100,
        inCart: 0,
        imgSrc: "./img/bike/2.jpg",
        location: { lat: 60.294411, lng: 25.040070 },
        city: 'vantaa',
        category: 'bike',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 2,
        name: 'mountain bike',
        desc: 'There are many variations',
        tag: 'Green',
        price: 150,
        inCart: 0,
        imgSrc: "./img/bike/3.jpg",
        location: { lat: 60.205238, lng: 24.654079 },
        city: 'espoo',
        category: 'bike',
        date: new Date(Date.now()).toLocaleDateString()

    },
    {
        id: 3,
        name: 'racing bike',
        desc: 'There are many variations',
        tag: 'black',
        price: 300,
        inCart: 0,
        imgSrc: "./img/bike/4.png",
        location: { lat: 60.451813, lng: 22.266630 },
        city: 'turku',
        category: 'bike',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 4,
        name: 'classic car',
        desc: 'There are many variations',
        tag: 'blue',
        price: 20000,
        inCart: 0,
        imgSrc: "./img/car/1.jpg",
        location: { lat: 60.228960, lng: 24.765220 },
        city: 'karakallio',
        category: 'car',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 5,
        name: 'Pursh',
        desc: 'There are many variations',
        tag: 'Gray',
        price: 60000,
        inCart: 0,
        imgSrc: "./img/car/2.png",
        location: { lat: 60.222830, lng: 24.738500 },
        city: 'kavallinmäki',
        category: 'car',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 6,
        name: 'mustange',
        desc: 'There are many variations',
        tag: 'black',
        price: 25000,
        inCart: 0,
        imgSrc: "./img/car/3.jpg",
        location: { lat: 60.223850, lng: 24.758650 },
        city: 'metropolia',
        category: 'car',
        date: new Date(Date.now()).toLocaleDateString()

    },
    {
        id: 7,
        name: 'old car',
        desc: 'There are many variations',
        tag: 'maroon',
        price: 6000,
        inCart: 0,
        imgSrc: "./img/car/4.png",
        location: { lat: 60.124260, lng: 24.438231 },
        city: 'kirkkonummi',
        category: 'car',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 8,
        name: 'laptop',
        desc: 'There are many variations',
        tag: 'black',
        price: 1000,
        inCart: 0,
        imgSrc: "./img/computer/1.png",
        location: { lat: 65.012093, lng: 25.465076 },
        city: 'oulu',
        category: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 9,
        name: 'monitor',
        desc: 'There are many variations',
        tag: 'black',
        price: 200,
        inCart: 0,
        imgSrc: "./img/computer/2.png",
        location: { lat: 60.402760, lng: 25.104719 },
        city: 'kerava',
        category: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 10,
        name: 'laptop',
        desc: 'There are many variations',
        tag: 'black',
        price: 700,
        inCart: 0,
        imgSrc: "./img/computer/3.png",
        location: { lat: 60.738491, lng: 24.772900 },
        city: 'riihimäki',
        category: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 11,
        name: 'monitor',
        desc: 'There are many variations',
        tag: 'black',
        price: 300,
        inCart: 0,
        imgSrc: "./img/computer/4.png",
        location: { lat: 60.393192, lng: 25.665274 },
        city: 'porvoo',
        category: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 12,
        name: 'sofa',
        desc: 'There are many variations',
        tag: 'Gray',
        price: 200,
        inCart: 0,
        imgSrc: "./img/furniture/1.png",
        location: { lat: 63.095249, lng: 21.616270 },
        city: 'vaasa',
        category: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 13,
        name: 'hand-chair',
        desc: 'There are many variations',
        tag: 'Red',
        price: 100,
        inCart: 0,
        imgSrc: "./img/furniture/2.png",
        location: { lat: 60.096931, lng: 19.934820 },
        city: 'maarianhamina',
        category: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 14,
        name: 'king size bed',
        desc: 'There are many variations',
        tag: 'grey',
        price: 500,
        inCart: 0,
        imgSrc: "./img/furniture/3.png",
        location: { lat: 60.569199, lng: 27.193800 },
        city: 'hamina',
        category: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()

    },
    {
        id: 15,
        name: 'sun chair',
        desc: 'There are many variations',
        tag: 'brown',
        price: 30,
        inCart: 0,
        imgSrc: "./img/furniture/4.png",
        location: { lat: 60.466629, lng: 26.946011 },
        city: 'kotka',
        category: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 16,
        name: 'makeup table',
        desc: 'There are many variations',
        tag: 'pink',
        price: 80,
        inCart: 0,
        imgSrc: "./img/furniture/5.png",
        location: { lat: 62.802238, lng: 29.973249 },
        city: 'karjala',
        category: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 17,
        name: 'table',
        desc: 'There are many variations',
        tag: 'pink',
        price: 100,
        inCart: 0,
        imgSrc: "./img/furniture/6.png",
        location: { lat: 59.823101, lng: 22.969290 },
        city: 'hanko',
        category: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
];