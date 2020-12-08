
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
    if(totalCost && document.getElementById("totalPriceContainer")) {
        document.getElementById("totalPriceContainer").innerText = totalCost +'.00 €';
    } else if(document.getElementById("totalPriceContainer")){
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

/*
// categories page
const displayedCategories = document.querySelector('.displayed-categories');
const carIconSelector = document.getElementById('carIcon');
const furnitureIconSelector = document.getElementById('furnitureIcon');
const bicycleIconSelector = document.getElementById('bicycleIcon');
const phoneIconSelector = document.getElementById('smartphoneIcon');


for (let i = 0; i < products.length; i++) {
    carIconSelector.addEventListener('click', function (){
        if(products[i].category === 'car') {
            displayedCategories.setAttribute('style', 'display: flex',
            'flex-wrap: wrap;',
            'justify-content: center;',
            'margin-top: 50px;',
            'padding-bottom: 100px;')
            displayedCategories.innerHTML += `
            <div class="shoppingCard">
            <img class="image" src="${products[i].imgSrc}"  alt="pic1">
            <h3>This is a header</h3>
            <p class="price">${products[i].price}</p>
            <p>Here is a paragraph</p>
            <button>Lisää ostoskoriin</button>
        </div>`
        }
    });
        furnitureIconSelector.addEventListener('click', function (){
        if(products[i].category === 'furniture') {
            displayedCategories.setAttribute('style', 'display: flex',
                'flex-wrap: wrap;',
                'justify-content: center;',
                'margin-top: 50px;',
                'padding-bottom: 100px;')
            displayedCategories.innerHTML += `
            <div class="shoppingCard">
            <img class="image" src="${products[i].imgSrc}"  alt="pic1">
            <h3>This is a header</h3>
            <p class="price">${products[i].price}</p>
            <p>Here is a paragraph</p>
            <button>Lisää ostoskoriin</button>
        </div>`
        }
    });
    bicycleIconSelector.addEventListener('click', function (){
        if(products[i].category !== 'bike') {
            displayedCategories.setAttribute('style', 'display: none');
        }
        if(products[i].category === 'bike') {
            displayedCategories.setAttribute('style', 'display: flex',
                'flex-wrap: wrap;',
                'justify-content: center;',
                'margin-top: 50px;',
                'padding-bottom: 100px;')
            displayedCategories.innerHTML += `
            <div class="shoppingCard">
            <img class="image" src="${products[i].imgSrc}"  alt="pic1">
            <h3>This is a header</h3>
            <p class="price">${products[i].price}</p>
            <p>Here is a paragraph</p>
            <button>Lisää ostoskoriin</button>
        </div>`
        }
    });
    phoneIconSelector.addEventListener('click', function (){
        if(products[i].category === 'computer') {
            displayedCategories.setAttribute('style', 'display: flex',
                'flex-wrap: wrap;',
                'justify-content: center;',
                'margin-top: 50px;',
                'padding-bottom: 100px;')
            displayedCategories.innerHTML += `
            <div class="shoppingCard">
            <img class="image" src="${products[i].imgSrc}"  alt="pic1">
            <h3>This is a header</h3>
            <p class="price">${products[i].price}</p>
            <p>Here is a paragraph</p>
            <button>Lisää ostoskoriin</button>
        </div>`
        }
    });
}
*/







