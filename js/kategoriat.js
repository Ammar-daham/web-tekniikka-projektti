// Enable Strict Mode
'use strict';

//finding the category buttons in and create section to display the products
const mainSelector = document.querySelector("main");
const carIconSelector = document.querySelector("#carIcon");
const furnitureIconSelector = document.querySelector("#furnitureIcon");
const bicycleIconSelector = document.querySelector("#bicycleIcon");
const smartphoneIconSelector = document.querySelector("#smartphoneIcon");
const categoryContainer = document.createElement("section");
categoryContainer.setAttribute("style","display: flex; flex-wrap: wrap; flex-direction: row; justify-content: center;");
mainSelector.appendChild(categoryContainer);

let carDivList = [];
let furnitureDivList = [];
let bicycleDivList = [];
let smartphoneDivList = [];

//this function to create shopping cards
function makeCategory(jsonList, categoryList){
    for (let grow = 0;grow < jsonList.length;grow++){
        const makeDiv = document.createElement("div");
        categoryList[grow] = makeDiv;
        makeDiv.className = "shoppingCard";
        const titles = document.createElement("h3");
        const prices = document.createElement("p");
        const images = document.createElement("img");
        images.alt = 'tuote kuva';
        const productInfo = document.createElement("p");
        const productInfoText = document.createTextNode("");
        const locationButton = document.createElement("button");
        locationButton.className = "location";
        const buttons = document.createElement("button");
        buttons.className = "shoppingbasket"
        const buttonTextNode = document.createTextNode('Lisää ostoskoriin');
        buttons.id = jsonList[grow].id

        buttons.addEventListener('click', function(event){
            addProductToCart(event.target.id)
        })



        titles.innerHTML = capitalizeFirstLetter(jsonList[grow].name);
        prices.innerHTML = jsonList[grow].price + " €";
        productInfo.innerHTML = jsonList[grow].desc;
        images.src = jsonList[grow].imgSrc;

        locationButton.innerHTML = `<ion-icon name="location-outline"></ion-icon>`;

        categoryContainer.appendChild(makeDiv);
        makeDiv.appendChild(images);
        makeDiv.appendChild(titles);
        makeDiv.appendChild(prices);
        makeDiv.appendChild(productInfo);
        productInfo.appendChild(productInfoText);
        makeDiv.appendChild(buttons);
        makeDiv.appendChild(locationButton);
        buttons.appendChild(buttonTextNode);
    }
    showCategory(categoryList);
}
function hideCategory(list, list2, list3, list4){
    for(let grow = 0;grow < list.length;grow++){
        list[grow].setAttribute("style", "display: none;");
    }
    for(let grow = 0;grow < list2.length;grow++){
        list2[grow].setAttribute("style", "display: none;");
    }
    for(let grow = 0;grow < list3.length;grow++){
        list3[grow].setAttribute("style", "display: none;");
    }
    for(let grow = 0;grow < list4.length;grow++){
        list4[grow].setAttribute("style", "display: none;");
    }
}
function showCategory(list){
    hideCategory(carDivList, furnitureDivList, bicycleDivList, smartphoneDivList);
    for(let grow = 0; grow < list.length; grow++){
        list[grow].setAttribute("style", "display: block;");
    }

}

let makeCarBool = true;
let makeFurBool = true;
let makeBiBool = true;
let makeSmartBool = true;


function carsCategory(){
    if(makeCarBool){
        let cars = products.filter( p => p.category === 'car')
        makeCategory(cars, carDivList);
    }
}
window.onload =()=>{
    carsCategory()
}
carIconSelector.addEventListener("click", (e)=>carsCategory());

furnitureIconSelector.addEventListener("click", () =>{
    if(makeFurBool){
        let furnitures = products.filter( p => p.category === 'furniture')
        makeCategory(furnitures, furnitureDivList);
    }
});

bicycleIconSelector.addEventListener("click", () =>{
    if(makeBiBool){
        let bikes =  products.filter( p => p.category === 'bike')
        makeCategory(bikes, bicycleDivList);
    }
});
smartphoneIconSelector.addEventListener("click", ()=>{
    if(makeSmartBool) {
        let phones = products.filter(p => p.category === 'computer')
        makeCategory(phones, smartphoneDivList);
    }
});