


const carList = [
    {
        'title': 'mersu',
        'price': '20000',
        'image': 'img/pic8.jpg',

    },
    {
        'title': 'Ferrari',
        'price': '550000',
        'image': 'img/pic9.jpg',
    },
];

const furnitureList = [
    {
        'title': 'valkoinen sohva',
        'price': '240',
        'image': 'img/pic3.jpg',
    },
];

const bicycleList = [
    {
        'title': 'vihreä pyörä',
        'price': '400',
        'image': 'img/pic1.jpg',
    },
];

const smartphoneList = [
    {
        'title': 'Iphone 8',
        'price': '600',
        'image': 'img/pic1.jpg',
    },
];

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


function makeCategory(jsonList, categoryList){
    for (let grow = 0;grow < jsonList.length;grow++){
        const makeDiv = document.createElement("div");
        categoryList[grow] = makeDiv;
        makeDiv.className = "shoppingCard";
        const titles = document.createElement("h3");
        const prices = document.createElement("p");
        const titleAndPriceLabel = document.createElement("div");
        const images = document.createElement("img");
        const productInfo = document.createElement("p");
        const productInfoText = document.createTextNode("Here is some information about the product");
        const buttons = document.createElement("button");
        const buttonLink = document.createElement("a");
        const buttonLinkText = document.createTextNode("Add to Cart");

        titles.innerHTML = jsonList[grow].title;
        prices.innerHTML = jsonList[grow].price + "€";
        images.src = jsonList[grow].image;

        categoryContainer.appendChild(makeDiv);
        makeDiv.appendChild(images);
        makeDiv.appendChild(titles);
        makeDiv.appendChild(prices);
        makeDiv.appendChild(productInfo);
        productInfo.appendChild(productInfoText);
        makeDiv.appendChild(buttons);
        buttons.appendChild(buttonLink);
        buttonLink.appendChild(buttonLinkText);
    }
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
    for(let grow = 0; grow < list.length; grow++){
        list[grow].setAttribute("style", "display: block;");
    }

}
function selectionHover(){

}
function removeSelectionHover(){

}

let makeCarBool = true;
let makeFurBool = true;
let makeBiBool = true;
let makeSmartBool = true;

carIconSelector.addEventListener("click", ()=>{
    if(makeCarBool){
        makeCategory(carList, carDivList);
        makeCarBool = false;
    }

    hideCategory(carDivList, furnitureDivList, bicycleDivList, smartphoneDivList);
    showCategory(carDivList);

});
furnitureIconSelector.addEventListener("click", () =>{
    if(makeFurBool){
        makeCategory(furnitureList, furnitureDivList);
        makeFurBool = false;
    }

    hideCategory(carDivList, furnitureDivList, bicycleDivList, smartphoneDivList);
    showCategory(furnitureDivList);

});

bicycleIconSelector.addEventListener("click", () =>{
    if(makeBiBool){
        makeCategory(bicycleList, bicycleDivList);
        makeBiBool = false;
    }

    hideCategory(carDivList, furnitureDivList, bicycleDivList, smartphoneDivList);
    showCategory(bicycleDivList);

});

smartphoneIconSelector.addEventListener("click", ()=>{
    if(makeSmartBool){
        makeCategory(smartphoneList, smartphoneDivList);
        makeSmartBool = false;
    }

    hideCategory(carDivList, furnitureDivList, bicycleDivList, smartphoneDivList);
    showCategory(smartphoneDivList);

});

