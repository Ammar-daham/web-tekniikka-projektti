'use strict';

//products list
const products = [
    {
        id:0,
        name: 'Grey',
        tag: 'Gray',
        price: 25,
        inCart: 0,
        imgSrc: "./img/pic1.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        kategorit: 'tietokone',
        data: Date.now()
    },
    {
        id:1,
        name: 'Grey',
        tag: 'blue',
        price: 35,
        inCart: 0,
        imgSrc: "./img/pic2.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        kategorit: 'tietokone',
        data: Date.now()
    },
    {
        id:2,
        name: 'Grey',
        tag: 'red',
        price: 15,
        inCart: 0,
        imgSrc: "./img/pic3.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        kategorit: 'tietokone',
        data: Date.now()
    },
    {
        id:3,
        name: 'black',
        tag: 'black',
        price: 20,
        inCart: 0,
        imgSrc: "./img/pic4.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        kategorit: 'tietokone',
        data: Date.now()
    },
];

//finding bottun tags
const carts = document.getElementsByTagName("button");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function () {
        cartNumber(products[i]);
        totalCost(products[i]);
        carts[i].disabled = true
    })
}
displayProduct();
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

//this function displays the data in the basked shop page
(function displayTotalPrice() {
    document.getElementById("totalPriceContainer").innerText = localStorage.getItem("totalCost") + ' €';



})()
function displayProduct(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let product = document.querySelector('.product');
    const date = new Date();
    if(cartItems && product){

        Object.values(cartItems).map(item => {
           product.innerHTML += `
             <tr>
                <td>
                    <ion-icon name="close-circle" class="close"></ion-icon>
                    <img src="${item.imgSrc}" alt="">
                </td>
                <td> <span>${item.name}</span></td>
                <td> <span>${item.price},00 €</span></td> 
                <td> <span>${date}/span></td> 
            </tr>    
           `
        });
    }
}
const close  = document.querySelector('.close')

    close.addEventListener('click', function () {
        console.log('running');
        localStorage.removeItem('productsInCart');
        localStorage.removeItem('cartNumbers');
    });

