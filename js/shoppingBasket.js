'use strict';

//products list
const products = [
    {
        id: 0,
        name: 'classic bike',
        tag: 'Gray',
        price: 80,
        inCart: 0,
        imgSrc: "./img/bike/1.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'Bicycle',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 1,
        name: 'lady bike',
        tag: 'colorful',
        price: 100,
        inCart: 0,
        imgSrc: "./img/bike/2.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'bike',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 2,
        name: 'mountain bike',
        tag: 'Green',
        price: 150,
        inCart: 0,
        imgSrc: "./img/bike/3.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'bike',
        date: new Date(Date.now()).toLocaleDateString()

    },
    {
        id: 3,
        name: 'racing bike',
        tag: 'black',
        price: 300,
        inCart: 0,
        imgSrc: "./img/bike/4.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'bike',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 4,
        name: 'classic car',
        tag: 'blue',
        price: 20000,
        inCart: 0,
        imgSrc: "./img/car/1.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'car',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 5,
        name: 'Pursh',
        tag: 'Gray',
        price: 60000,
        inCart: 0,
        imgSrc: "./img/car/2.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'car',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 6,
        name: 'mustange',
        tag: 'black',
        price: 25000,
        inCart: 0,
        imgSrc: "./img/car/3.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'car',
        date: new Date(Date.now()).toLocaleDateString()

    },
    {
        id: 7,
        name: 'old car',
        tag: 'maroon',
        price: 6000,
        inCart: 0,
        imgSrc: "./img/car/4.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'bike',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 8,
        name: 'laptop',
        tag: 'black',
        price: 1000,
        inCart: 0,
        imgSrc: "./img/computer/1.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 9,
        name: 'monitor',
        tag: 'black',
        price: 200,
        inCart: 0,
        imgSrc: "./img/computer/2.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 10,
        name: 'laptop',
        tag: 'black',
        price: 700,
        inCart: 0,
        imgSrc: "./img/computer/3.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 11,
        name: 'monitor',
        tag: 'black',
        price: 300,
        inCart: 0,
        imgSrc: "./img/computer/4.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'computer',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 12,
        name: 'sofa',
        tag: 'Gray',
        price: 200,
        inCart: 0,
        imgSrc: "./img/furniture/1.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 13,
        name: 'hand-chair',
        tag: 'Red',
        price: 100,
        inCart: 0,
        imgSrc: "./img/furniture/2.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 14,
        name: 'king size bed',
        tag: 'grey',
        price: 500,
        inCart: 0,
        imgSrc: "./img/furniture/3.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()

    },
    {
        id: 15,
        name: 'sun chair',
        tag: 'brown',
        price: 30,
        inCart: 0,
        imgSrc: "./img/furniture/4.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 16,
        name: 'makeup table',
        tag: 'pink',
        price: 80,
        inCart: 0,
        imgSrc: "./img/furniture/5.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 17,
        name: 'table',
        tag: 'pink',
        price: 100,
        inCart: 0,
        imgSrc: "./img/furniture/6.png",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'furniture',
        date: new Date(Date.now()).toLocaleDateString()
    },
];


//finding button tags
const carts = document.getElementsByTagName("button");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
        cartNumber(products[i]);
        totalCost(products[i]);
        carts[i].disabled = true
    })
}
displayProduct();
//CATEGORIES PAGE CODE STARTS FROM HERE

//this function keep the basket value same as the local storage value when refreshing the site
(function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cards span').textContent = productNumbers;
        document.querySelector('.card-mobile span').textContent = productNumbers;
    }
})();

//this function sets key and value to the local storage and check if there is a value saved then increase it
function cartNumber(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cards span').textContent = productNumbers + 1;
        document.querySelector('.card-mobile span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cards span').textContent = 1;
        document.querySelector('.card-mobile span').textContent = 1;
    }
    setItems(product);
}

//this function sets the items in the localStorage
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] === undefined) {
            cartItems = {
                ...cartItems, [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


//this function calculate the total cost
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

//this function displays the items in the shopping basket page
function displayProduct() {
    let totalCost = localStorage.getItem("totalCost");
    if(totalCost) {
        document.getElementById("totalPriceContainer").innerText = totalCost +'.00 €';
    } else {
        document.getElementById("totalPriceContainer").innerText = '0.00 €'
    }
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let product = document.querySelector('.product');
    if (cartItems && product) {
        Object.values(cartItems).map(item => {
            product.innerHTML += `
             <tr>
                <td>
                    <ion-icon name="close-circle" class="close" onclick="removeItem(${item.id})"></ion-icon>
               </td>
               <td>
                    <img src="${item.imgSrc}" alt="">
                </td>
                <td> <span>${item.name}</span></td>
                <td> <span>${item.price}.00 €</span></td> 
                <td> <span>${item.date}</span></td> 
            </tr>    
           `
        });
    }
}

//this function remove the items from shopping basket and localStorage
function removeItem(id) {
    let cartItems = localStorage.getItem("productsInCart");
    let cartNumbers = localStorage.getItem("cartNumbers");
    let totalCost = localStorage.getItem("totalCost");
    cartItems = JSON.parse(cartItems);
    cartNumbers = parseInt(cartNumbers) - 1;
    totalCost = JSON.parse(totalCost);
    let item = Object.values(cartItems).filter(item => item.id === id)
    totalCost = totalCost - item[0].price;
    let newArray = Object.values(cartItems).filter(item => item.id !== id)
    localStorage.clear()
    localStorage.setItem('productsInCart', JSON.stringify(newArray));
    localStorage.setItem('cartNumbers', JSON.stringify(cartNumbers));
    localStorage.setItem('totalCost', JSON.stringify(totalCost));
    location.reload()
}

/*
// timer for the products to remove it
setTimeout(()=>{
    localStorage.clear()
}, 1000)
*/








