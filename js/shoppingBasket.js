'use strict';
//finding button tags



const carts = document.getElementsByClassName('shoppingbasket');
function addProductToCart(id){
    const product = products.filter(p => p.id === parseInt(id))
    cartNumber(product[0]);
    totalCost(product[0]);
}
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function (event) {
        addProductToCart(event.target.id)
    })
}
displayProduct();
//CATEGORIES PAGE CODE STARTS FROM HERE

//this function keep the basket value same as the local storage value when refreshing the site
(function onLoadCartNumber() {
    let productNumbers = GetFromStorage('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cards span').textContent = productNumbers;
        document.querySelector('.card-mobile span').textContent = productNumbers;
    }
})();

//this function sets key and value to the local storage and check if there is a value saved then increase it
function cartNumber(product) {
    let productNumbers = GetFromStorage('cartNumbers');
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
    let cartItems = GetFromStorage('productsInCart');
    if (cartItems != null) {
        if (cartItems[product.id] === undefined) {
            cartItems = {
                ...cartItems, [product.id]: product
            }
        }
        cartItems[product.id].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.id]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


//this function calculate the total cost
function totalCost(product) {
    let cartCost = GetFromStorage('totalCost');
    if (cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function GetFromStorage(name){
    return  JSON.parse(localStorage.getItem(name))
}
//this function displays the items in the shopping basket page
function displayProduct() {
    let totalCost = GetFromStorage("totalCost");
    if(totalCost && document.getElementById("totalPriceContainer")) {
        document.getElementById("totalPriceContainer").innerText = totalCost +'.00 €';
    } else if(document.getElementById("totalPriceContainer")){
        document.getElementById("totalPriceContainer").innerText = '0.00 €'
    }
    let cartItems = GetFromStorage("productsInCart");
    let product = document.querySelector('.product');
    if (cartItems && product) {
        Object.values(cartItems).map(item => {
            product.innerHTML += `
             <tr>
                <td>
                    <ion-icon name="close-circle" class="close" onclick="removeItem(${item.id})"></ion-icon>
               </td>
               <td>
                    <img src="${item.imgSrc}" alt="tuote kuva">
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
    let cartItems = GetFromStorage("productsInCart");
    let cartNumbers = GetFromStorage("cartNumbers");
    let totalCost = GetFromStorage("totalCost");
    cartNumbers = parseInt(cartNumbers) - 1;

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








