'use strict';

//products list
const products = [
    {
        id: 0,
        name: 'Grey',
        tag: 'Gray',
        price: 25,
        inCart: 0,
        imgSrc: "./img/pic1.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'tietokone',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 1,
        name: 'Grey',
        tag: 'blue',
        price: 35,
        inCart: 0,
        imgSrc: "./img/pic2.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'tietokone',
        date: new Date(Date.now()).toLocaleDateString()
    },
    {
        id: 2,
        name: 'Grey',
        tag: 'red',
        price: 15,
        inCart: 0,
        imgSrc: "./img/pic3.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'tietokone',
        date: new Date(Date.now()).toLocaleDateString()

    },
    {
        id: 3,
        name: 'black',
        tag: 'black',
        price: 20,
        inCart: 0,
        imgSrc: "./img/pic4.jpg",
        location: {
            lat: 2223,
            lng: 232131,
        },
        categories: 'tietokone',
        date: new Date(Date.now()).toLocaleDateString()
    },
];
/*let categories = document.querySelector('.category');
let article = document.querySelector('.cate');
for(let i = 0; i <= products.length; i++) {
    categories.addEventListener('click',function (){
        console.log('running');
        article.innerHTML +=`
        <section class="container">
            <div class="shoppingCard">
                <img class="image" src="${products[i].imgSrc}" alt="pic1">
                <h3>This is a header</h3>
                <p class="price">${products[i].price}</p>
                <p>Here is a paragraph</p>
                <button><a href=""> </a>Add to Cart</button>
            </div>
            </section>
        `
    })
}
*/

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








